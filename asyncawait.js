let Posts=[{title:"Post one",body:"This is post one"},{title:"Post two",body:"This is post two"}];
function getPost(){
    Posts.forEach((post)=>{
        console.log(post);
    })
}
function createPost(post){
return new Promise((res,rej)=>{
    setTimeout(()=>{
        Posts.push(post);
        res("POST ADDED");
    },2000)
  })
}
function deletePost(){
   return new Promise((res,rej)=>{
    setTimeout(()=>{
        Posts.pop();
        res("POST DELETED");
    },1000)
  })
}
// getPost();
// createPost({title:"Third Post",body:"This is the third Post"}).then((message) => {
//     console.log(message);
//     getPost();
// });
async function main(){
    let cp=await createPost({title:"Third Post",body:"This is the third Post"});
    console.log(cp);
    console.log(Posts);
    let dp=await deletePost();
    console.log(dp);
    console.log(Posts);
}
main();