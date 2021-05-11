import React, {useState} from "react";
import PostsList from "./PostsList";

const getPostsList = ()=>{
    return [
        {
            "user": "Leanne Graham",
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "like":0,
            "dislike":0,

        },
        {
            "user": "Ervin Howell",
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            "like":0,
            "dislike":0,
        },
        {
            "user": "Clementine Bauch",
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            "like":0,
            "dislike":0,
        },
        {
            "user": "Patricia Lebsack",
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
            "like":0,
            "dislike":0,
        },
        {
            "user": "Chelsey Dietrich",
            "id": 5,
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
            "like":0,
            "dislike":0,
        },
        {
            "user": "Mrs. Dennis Schulist",
            "id": 6,
            "title": "dolorem eum magni eos aperiam quia",
            "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
            "like":0,
            "dislike":0,
        },
        {
            "user": "Kurtis Weissnat",
            "id": 7,
            "title": "magnam facilis autem",
            "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
            "like":0,
            "dislike":0,
        },
        {
            "user": "Nicholas Runolfsdottir V",
            "id": 8,
            "title": "dolorem dolore est ipsam",
            "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
            "like":0,
            "dislike":0,
        },
        {
            "user": "Glenna Reichert",
            "id": 9,
            "title": "nesciunt iure omnis dolorem tempora et accusantium",
            "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
            "like":0,
            "dislike":0,
        },
        {
            "user": "Clementina DuBuque",
            "id": 10,
            "title": "optio molestias id quia eum",
            "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
            "like":0,
            "dislike":0,
        },
    ]
}
export default ()=>{
const [posts, setPosts] = useState(getPostsList());
    const likeHandle = (id)=>{
        const array = [...posts]
        const idx = array.findIndex((elem)=>elem.id ===id)
        if (idx !==-1){
            array[idx].like++
        }
        setPosts(array)
    }
    const dislikeHandle = (id)=>{
        const array = [...posts]
        const idx = array.findIndex((elem)=>elem.id ===id)
        if (idx !==-1){
            array[idx].dislike++
        }
        setPosts(array)
    }





    return(
        <div>
            <PostsList
posts = {posts}
likeHandle={likeHandle}
dislikeHandle={dislikeHandle}
            />
        </div>
    )

}
