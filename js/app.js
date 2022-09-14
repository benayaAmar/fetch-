let url = "../js/pageObj.JSON";
let Pages = "";
// translate the files
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        objMagic(data)

    })
    .catch();
    // making our data w/timeout
    let objMagic = (pageObj) => {

        webPages = pageObj
};
    //   here we make a "fake api "
      const fakeApi = (url) => {
        return new Promise((res, rej) => {
          setTimeout(() => {

            let { pages } = webPages;
            if (pages[url]) {
              res(pages[url]);
            } else {
              rej();
            }
          }, 500);
        });
};


// getting game of one user
fakeApi("/user/234985789")
  .then((data) => {
  return data
  })
  .then((myName) => {
  console.log("your name : "+myName.userName);
  })
  .catch((error) => {
  console.error("ho ho .. went wrong ");
})



// getting the followers of user
fakeApi("/user/234985789")
  .then((data) => {
    return data
  })
  .then((completeFollow) => {
    console.log( "you have : "+completeFollow.followers + " followers");
  })
  .catch((error) => {
  console.error("ho ho .. went wrong ");
})

// getting the city of user
fakeApi("/user/234985789")
  .then((data) => {
    return data
  })
  .then((myTown) => {
    console.log( "your city : " +myTown.city);
  })
  .catch((error) => {
  console.error("ho ho ..went wrong ");
})



//post

fakeApi("/post/101")
    .then((data) => {
        return data
    })
  .then((myPost) => {
    let myPost1 = myPost.title;
    console.log( "your post is : "+myPost1);


    })
    .catch((error) => {
         console.error("page 404");
    });
