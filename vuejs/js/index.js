let app = new Vue({
    el: "#app",
    data: {
        message: " Hello Vue!"
    }
});

let app2 = new Vue({
    el: "#app2",
    data: {
        message: "Loaded on " + new Date().toLocaleString(),
        linkUrl: "https://bbc.in/2LAnJs8",
        linkText: "Google is down!"
    }
});

let app3 = new Vue({
    el:"#app3",
    data: {
        showIt: false
    }
});

let app4 = new Vue({
    el: "#app4",
    data: {
        theList: [
            {
                text:"Learn HTML"
            },
            {
                text:"Learn CSS"
            },
            {
                text: "Learn Javascript"
            }
        ]
    }
});

let app5 =  new Vue({
    el: "#app5",
    data: {
        msg: "Jae Surya"
    },
    methods: {
        reverseMsg: function (){
            this.msg = this.msg.split("").reverse().join("");
        }
    }
});

let app6 = new Vue({
    el: "#app6",
    data: {
        message:"Hello World!"
    }
});

Vue.component("grocery-list",{
    props:["todo"],
    template:"<li>{{todo.desc}}</li>"
});

let app7 = new Vue ({
    el: "#app7",
    data: {
        groceryList: [
            {
                id:0,
                desc:"Vegetables"
            },
            {
                id:1,
                desc:"Cheese"
            },
            {
                id:2,
                desc:"Mineral Water"
            }
        ]
    }
});