// Login System JS Here

const loginBtn = document.getElementById("login-btn");

if(loginBtn){
    loginBtn.addEventListener('click',function(){
        const userInput = document.getElementById('userInput');
        const userInputValue = userInput.value;
        const userPassWord = document.getElementById("userPassword")
         const userPin = userPassWord.value;

          if(userInputValue === 'admin' && userPin ==='admin123'){
        window.location.replace('./issues.html');
    }else{
        alert("Login Failed");
        return;
    }
    })
}

function manageSpinner(status){
    const loader = document.getElementById('loader');

    if(status === true){
        loader.classList.remove('hidden');
    }else{
        loader.classList.add('hidden')
    }
}

const issuesCardContainer = document.getElementById('issuesCardContainer');
const issueTitle = document.getElementById("issueTitle");
const issueStatus = document.getElementById('issueStatus');
const issueAuthor = document.getElementById("issueAuthor");
const issueDate = document.getElementById('issueDate');
const issueLabels = document.getElementById("issueLabels");
const issueExplained = document.getElementById('issueExplained');
const issueAssignee = document.getElementById("issueAssignee");
const issuePriority = document.getElementById('issuePriority');




// load Issues
async function loadIssues(){
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const issuesDataFromApi = await res.json();
    displayIssues(issuesDataFromApi.data);
   
}


function createLabels(labels){
    const levelElements = labels.map(label=> {
        if(label === "bug"){
            return `<span class="bg-red-100 text-red-500 text-xs px-4 py-1 rounded-full">BUG </span>`
        }

        if(label === 'help wanted'){
            return `<span class="bg-yellow-100 text-yellow-500 text-xs px-4 py-1 rounded-full">HELP WANTED </span>`
        }

        return `<span class="bg-gray-100 text-gray-500 text-xs px-4 py-1 rounded-full">${label}</span>`
    })

    return levelElements.join("");
}


async function displayIssues(issuesData){
    manageSpinner(true)
    const totalIssuesCount = document.getElementById('totalIssuesCount');
    totalIssuesCount.innerText = `${issuesData.length} Issues`;
   

    issuesData.forEach(issue=>{
        const issuesCardBox = document.createElement("div");
          issuesCardBox.innerHTML = `
            <div id="issuesCardBox" class="w-95 bg-white rounded-lg border-t-4  p-4 mb-3 ${issue.priority === 'low' ? 'border-purple-500' : 'border-green-500'}">
                    <div class="flex justify-between items-center mb-3">
                        <div>
                            <img src="${issue.status === 'open' ? './assets/Open-Status.png' : './assets/Closed-Status.png'}" alt="">                    
                        </div>


                        <span class="${issue.priority==='high' ? 'bg-red-100 text-red-500 text-xs px-4 py-1 rounded-full' : issue.priority === 'medium' ? 'bg-yellow-100 text-yellow-500 text-xs px-4 py-1 rounded-full' :'bg-green-100 text-green-500 text-xs px-4 py-1 rounded-full' }">${issue.priority}</span>
                        
                    </div> 

                    <h3  onclick="issueDetails(${issue.id})" class="font-bold"> ${issue.title}</h3>
                    <p class="line-clamp-2">${issue.description}</p>


                    <div class="flex gap-2 mb-3 mt-2">
                        ${createLabels(issue.labels)} 

                    </div>

                    <hr class="mb-3 text-gray-400">

                    <div class="space-y-3  text-gray-400">
                        <p>#1 by ${issue.author}</p>
                        <p>${issue.updatedAt}</p>
                    </div>

                </div>
      `

      issuesCardContainer.appendChild(issuesCardBox);
      manageSpinner(false)
    })



}



loadIssues()


async function issueDetails(issueDetailsID){
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${issueDetailsID}`)
    const issuesData = await res.json();
    issueTitle.innerText = issuesData.data.title;
    issueStatus.innerText = issuesData.data.status;
    issueAuthor.innerText = `Opened by ${issuesData.data.author}`
    issueDate.innerText =  issuesData.data.updatedAt.split("T")[0];
    issueLabels.innerHTML = createLabels(issuesData.data.labels);
    issueExplained.innerText = issuesData.data.description;
    issueAssignee.innerText = issuesData.data.assignee;
    issuePriority.innerText = issuesData.data.priority;
    

    const my_modal_1 = document.getElementById("issueDetails").showModal();
    
}





  