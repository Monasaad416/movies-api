//display movies start
let movies=[];
let movieNowPlaying = [];
let moviesTopRated = [];
let moviesTrending = [];
let searchAll=[];
let displayAllMovies = document.getElementById("display-movies");
let displayAllNowPlaying = document.getElementById("display-now-playing");
let displayAllPopular = document.getElementById("popular");
let displayAllTopRated = document.getElementById("display-top-rated");
let displayAllTrending = document.getElementById("display-trending");


//search by word fn
let getMovie = document.getElementById("getMovie");

function getFromAll(){
    console.log(getMovie.value);

    let container = "";
    for (let i = 0; i < movies.length; i++) {
      if (
       movies[i].title.toUpperCase().includes(getMovie.value.toUpperCase())
      ) {
        container +=`  
        <div class=" col-lg-4 col-md-6 my-3">
            <div class="single-movie position-relative overflow-hidden">
                <img class="poster img-fluid" src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}"/>
                <div class="details text-center position-absolute">
                    <div>
                        <h5>${movies[i].title}</h5>
                        <p>${movies[i].overview}</p>
                        <div>vote average: ${movies[i].vote_average}</div>
                        <div>released date: ${movies[i].release_date}</div>
                    </div>
                </div>
            </div>
        </div>
      `
      }
      displayAllMovies.innerHTML = container;
    }

}
getMovie.onkeyup=getFromAll;


async function getAllMovies(){
    let request = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2Fju4ljpP17Ymw4NG8k0FQsibENTq9j2CyXp_oTdZSi4qcpZA_vAmPHTI`);
    let resBody = await request.json();
    //console.log(resBody);
    movies = resBody.results;
    console.log(movies);
    // if(`${movies}[1].vote_average >= "8"`){
    //     topRated();
    //     console.log(`${movies[1].vote_average} toprated`);
        
    // }
    displayMovies()
    
}
getAllMovies()


let moviesContainer = ``;
let movieNowPlayingContainer =``;
let moviePopularContainer =``;
let movieTopRatedContainer =``;





async function nowPlaying(){
    let request = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=2`);
    let res = await request.json();
    movieNowPlaying=res.results;
   //console.log(movieNowPlaying);
   displayNowPlaying();
}
nowPlaying()


async function popular(){
    let request = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=2`);
    let res = await request.json();
    moviePopular=res.results;
   //console.log(moviePopular);
   displayPopular();
}
popular()

async function topRated(){
    let request = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=2`);
    let res = await request.json();
    moviesTopRated=res.results;
    console.log(moviesTopRated);
    displayTopRated();
}
topRated()

//get trending

// async function trending(){
//     let request = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
//     let res = await request.json();
//     moviesTrending=res.results;
//     console.log(moviesTrending);
//     displayTrending();
// }
// trending()


//https:api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
//display all movies
function displayMovies(){
    for(let i=0; i<movies.length ; i++){
        //console.log(movies[i].title);
       moviesContainer +=`  
            <div class="col-lg-4 col-md-6 my-3">
                <div class="single-movie position-relative">
                    <img class="poster img-fluid" src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}"/>
                    <div class="details text-center position-absolute">
                        <div>
                            <h5>${movies[i].title}</h5>
                            <p>${movies[i].overview}</p>
                            <div>vote average: ${movies[i].vote_average}</div>
                            <div>released date: ${movies[i].release_date}</div>
                        </div>
                    </div>
                </div>
            </div>
          `
    }
    
displayAllMovies.innerHTML = moviesContainer;

$(".poster").hover(function(){
    $(this).next().animate({bottom:"0px"},1000);
},function(){
    $(this).next().animate({bottom:"-100%"},1000);
})


}

//display movies end

//display now playing
function displayNowPlaying(){
    for(let i=0; i<movieNowPlaying.length ; i++){
        //console.log(movieNowPlaying[i].title);
        movieNowPlayingContainer +=`  
            <div class=" col-lg-4 col-md-6 my-3">
                    <div class="single-movie position-relative overflow-hidden">
                        <img class="poster img-fluid" src="https://image.tmdb.org/t/p/w500/${movieNowPlaying[i].poster_path}"/>
                        <div class="details text-center position-absolute">
                            <div>
                                <h5>${movieNowPlaying[i].title}</h5>
                                <p>${movieNowPlaying[i].overview}</p>
                                <div>vote average: ${movieNowPlaying[i].vote_average}</div>
                                <div>released date: ${movieNowPlaying[i].release_date}</div>
                        </div>
                    </div>
                    </div>
            </div>
          `
    }
    
    displayAllNowPlaying .innerHTML = movieNowPlayingContainer;
    $(".poster").hover(function(){
        $(this).next().animate({bottom:"0px"},1000);
    },function(){
        $(this).next().animate({bottom:"-100%"},1000);
    })
}

//display popular
function displayPopular(){
    for(let i=0; i<moviePopular.length ; i++){
        //console.log(moviePopular[i].title);
        moviePopularContainer +=`  
            <div class="col-lg-4 col-md-6 my-3">
                <div class="single-movie position-relative overflow-hidden">
                    <img class="poster img-fluid" src="https://image.tmdb.org/t/p/w500/${moviePopular[i].poster_path}"/>
                        <div class="details text-center position-absolute">
                            <div>
                                <h5>${moviePopular[i].title}</h5>
                                <p>${moviePopular[i].overview}</p>
                                <div>vote average: ${moviePopular[i].vote_average}</div>
                                <div>released date: ${moviePopular[i].release_date}</div>
                            </div>
                        </div>
                </div>
            </div>
          `
    }
    
    displayAllPopular .innerHTML = moviePopularContainer;

    $(".poster").hover(function(){
        $(this).next().animate({bottom:"0px"},1000);
    },function(){
        $(this).next().animate({bottom:"-100%"},1000);
    })
}



//display top rated
function displayTopRated(){
    for(let i=0; i< moviesTopRated.length ; i++){
       console.log(moviesTopRated[i].title);
        movieTopRatedContainer +=`  
            <div class=" col-lg-4 col-md-6 my-3">
                    <div class="single-movie position-relative overflow-hidden">
                        <img class="poster w-100" src="https://image.tmdb.org/t/p/w500/${moviesTopRated[i].poster_path}"/>
                                                       
                        <div class="details text-center position-absolute">
                            <div>
                                <h5>${moviesTopRated[i].title}</h5>
                                <p>${moviesTopRated[i].overview}</p>
                                <div>vote average: ${moviesTopRated[i].vote_average}</div>
                                <div>released date: ${moviesTopRated[i].release_date}</div>
                            </div>
                        </div>
                    </div>
            </div>
          `
    }
    
    displayAllTopRated.innerHTML = movieTopRatedContainer;
    $(".poster").hover(function(){
        $(this).next().animate({bottom:"0px"},1000);
    },function(){
        $(this).next().animate({bottom:"-100%"},1000);
    })
}


////display trinding
// function displayTrending(){
//     for(let i=0; i< moviesTrending.length ; i++){
//        console.log(moviesTrending[i].title);
//         movieTrendingContainer +=`  
//             <div class=" col-lg-4 col-md-6 my-3">
//                     <div class="single-movie position-relative overflow-hidden">
//                         <img class="poster w-100" src="https://image.tmdb.org/t/p/w500/${moviesTrending[i].poster_path}"/>
                                                       
//                         <div class="details text-center position-absolute">
//                             <div>
//                                 <h5>${moviesTrending[i].title}</h5>
//                                 <p>${moviesTrending[i].overview}</p>
//                                 <div>${moviesTrending[i].vote_average}</div>
//                                 <div>${moviesTrending[i].release_date}</div>
//                             </div>
//                         </div>
//                     </div>
//             </div>
//           `
//     }
    
//     displayAllTrending.innerHTML = movieTrendingContainer;
//     $(".poster").hover(function(){
//         $(this).next().animate({bottom:"0px"},1000);
//     },function(){
//         $(this).next().animate({bottom:"-100%"},1000);
//     })
// }


//sidebar start
//toggle leftside of menu
    let leftSideWidth  = $(".left-side").outerWidth();
    console.log(leftSideWidth);

    $(".sidebar").css("left",-leftSideWidth);

    $(".toggle-icon").children("i").click(function(){
        let currentLeft = $(".sidebar").css("left");
        if(currentLeft == "0px"){
            $(".sidebar").animate({left:`${-leftSideWidth}`},1000);
            $(".toggle-icon i").removeClass("fa-times").addClass("fa-bars")
         
        }else{
            $(".sidebar").animate({left:"0px"},1000,function(){
                $(".left-side a").eq(0).show(100,function(){
                    $(".left-side a").eq(1).show(100,function(){
                        $(".left-side a").eq(2).show(100,function(){
                            $(".left-side a").show(100,function(){
                                $(".left-side a").show(100,function(){
                                    $(".left-side a").show(100)
                                })
                            })
                        })
                 })
                
                })
                  
            });
            $(".toggle-icon i").removeClass("fa-bars").addClass("fa-times")
            
        }
    })
              
//sidebar end


//get movie by....

$("li a").click(function(){
    let linkHref= $(this).attr("href");
    console.log(linkHref);
    let selectedSection = $(linkHref);
    console.log(selectedSection);
    $(selectedSection).siblings().css("dispaly","none");
    let sectionOffset = $(linkHref).offset().top ;
    $("body,html").animate({scrollTop:sectionOffset},1000)

})



//validatio start

let nameInp = document.getElementById("name");
let emailInp = document.getElementById("email");
let phoneInp = document.getElementById("phone");
let ageInp = document.getElementById("age");
let passwordInp = document.getElementById("password");
let repasswordInp = document.getElementById("repassword");


//validate name
let nameAlert = document.getElementById("nameAlert");

function validateName() {
  let nameRegex = /^[a-z 0-9]{3,15}$/;
  let nameValue = nameInp.value;

  if (nameRegex.test(nameValue)) {
    console.log("matching");
    nameInp.classList.remove("is-invalid");
    nameInp.classList.add("is-valid");
    nameAlert.classList.add("d-none");
    addBtn.removeAttribute("disabled");

    return true;
  } else {
    nameInp.classList.add("is-invalid");
    nameAlert.classList.remove("d-none");
    submitBtn.setAttribute("disabled", "true");

    return false;
  }
}

nameInp.addEventListener("keyup", validateName);

//validate email

let emailAlert = document.getElementById("emailAlert");

function validateEmail() {
  let emailRegex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailValue = emailInp.value;

  if (emailRegex.test(emailValue)) {
    console.log("matching");
    emailInp.classList.remove("is-invalid");
    emailInp.classList.add("is-valid");
    emailAlert.classList.add("d-none");
    submitBtn.removeAttribute("disabled");

    return true;
  } else {
    emailInp.classList.add("is-invalid");
    emailAlert.classList.remove("d-none");
    submitBtn.setAttribute("disabled", "true");

    return false;
  }
}

emailInp.addEventListener("keyup", validateEmail);


//validate phone number

let phonelAlert = document.getElementById("phoneAlert");

function validatePhone() {
  let phoneRegex =  /^\d{10}$/;
  let phoneValue = phoneInp.value;

  if (phoneRegex.test(phoneValue)) {
    console.log("matching");
    phoneInp.classList.remove("is-invalid");
    phoneInp.classList.add("is-valid");
    phoneAlert.classList.add("d-none");
    submitBtn.removeAttribute("disabled");

    return true;
  } else {
    phoneInp.classList.add("is-invalid");
    phoneAlert.classList.remove("d-none");
    submitBtn.setAttribute("disabled", "true");

    return false;
  }
}

phoneInp.addEventListener("keyup", validatePhone);


//validate password
let passwordlAlert = document.getElementById("passwordAlert");

function validatePassword() {
  let passwordRegex = /^[A-Za-z]\w{7,14}$/;
  let passwordValue = passwordInp.value;

  if (passwordRegex.test(passwordValue)) {
    console.log("matching");
    passwordInp.classList.remove("is-invalid");
    passwordInp.classList.add("is-valid");
    passwordAlert.classList.add("d-none");
    submitBtn.removeAttribute("disabled");

    return true;
  } else {
    passwordInp.classList.add("is-invalid");
    passwordAlert.classList.remove("d-none");
    submitBtn.setAttribute("disabled", "true");

    return false;
  }
}

passwordInp.addEventListener("keyup", validatePassword);



//validatio end









