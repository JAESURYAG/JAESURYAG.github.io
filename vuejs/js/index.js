let app = new Vue({
    el: "#app",
    data: {
        message: " Hello Vue!"
    }
});

let app2 = new Vue({
    el: "#app2",
    data: {
        message: "Loaded on " + new Date().toLocaleString()
    }
});