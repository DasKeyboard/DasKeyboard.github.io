var app = new Vue({
    el: '#app',
    data () {
        return {
        info: 'null'
        }
    },
    mounted () {
        axios
        .get('https://ipapi.co/8.8.8.8/json/',
        {
            headers: {'Content-Type': 'application/json'},
        }
        )
        .then(response => (this.info = response.status))
    }
    });