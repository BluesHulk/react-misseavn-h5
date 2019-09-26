export default {
    watch: {
       
    },
    methods: {
        goToSoundDetail(actorInfo) {
            const objectId = actorInfo.id ;
            const host = this.$route.host;
          
            let url = "http://" + location.host + location.pathname + "sound" ;
            console.log(location.pathname,location.host,url)
            window.open(url);
        },
    },
  
}



