let input = document.querySelector('.search')
const submitBtn = document.querySelector('.search-button')
const div = document.createElement('div')
const main = document.querySelector('#main')


submitBtn.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const username = input.value; // Get the value of the input field

    const requestUrl = `https://api.github.com/users/${username}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(this.responseText);
                const reposUrl = data.repos_url;

                // Make a request to the repositories URL
                const reposXhr = new XMLHttpRequest();
                reposXhr.open('GET', reposUrl);

                 reposXhr.onreadystatechange = async function () {
                    if (reposXhr.readyState === 4 && reposXhr.status === 200) {
                        const reposData = JSON.parse(reposXhr.responseText);
                        console.log(reposData); // This is the list of repositories


                        main.appendChild(div)
                        async function createcard(){
                            div.innerHTML = 
                        `<div class="card">
                        <div id="left">
                            <img src="${data.avatar_url}" alt="">
                            <a href="${data.html_url}">visit profile <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                        <div id="right">
                            <div id="name">
                                <h1>${data.name}</h1>
                            </div>
                            <div id="boxes-1">
                                <div class="box1">
                                    <h3>repo count </h3>
                                    <h2>${data.public_repos}</h2>
                                </div>
                                <div class="box1">
                                    <h3>Followers</h3>
                                    <h2>${data.followers}</h2>
                                </div>
                                <div class="box1">
                                    <h3>following</h3>
                                    <h2>${data.following}</h2>
                                </div>
                            </div>
                            
                            <div id="repos">
                                <div id="repo-left"><h4>repositories</h4></div>
                                <div id="repo-right">
                                    <ul id="repo-elements">
                                        
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                        </div>  `
                        let repoElements = document.querySelector('#repo-elements')
                        let li = document.createElement('li')
                    
                    
                        let repoInfo = [];

                        // Iterate through the repositories
                        for (let repo of data) {
                            // Extract 'name' and 'html_url' fields
                            let name = repo.name;
                            let htmlUrl = repo.html_url;
                        
                            // Create an object with the extracted information
                            let repoData = {
                                name: name,
                                html_url: htmlUrl
                            };
                        
                            // Add the object to the 'repoInfo' array
                            repoInfo.push(repoData);
                        }
                        
                        // 'repoInfo' now contains the extracted information
                        console.log(repoInfo);

                    await reposData.forEach(element => {
                            
                        console.log(element.name);
                        console.log(element.html_url);

                        repoElements.appendChild(li)
                        li.innerHTML = `<a href="${element.html_url}"
                        >${element.name}</a>`
                    });
                        }
                        createcard()
                  
                    
                    }
                };
                

                reposXhr.send();
            } else {
                console.error('Error fetching user data:', xhr.statusText);
            }
        }
    };

    xhr.send();
});
