new Vue({
    el: "#App",
    data:{
        health:100,
        shake:false,
        finished:false,
    },
    methods:{
        resetHealth:function(){
            this.health=100;
            this.toggleFinished(false);
        },
        punchBag:function(punch=10){
            this.shakeBag();
            this.health-=punch;
            if(this.health<=0)this.toggleFinished(true);
        },
        toggleFinished(finished){
            this.finished=finished;
        },
        shakeBag:function(){
            this.shake=true;
            setTimeout(()=>{
                this.shake=false;
            },500);
        }
    },
    computed:{
        getHealth:function(){
            return this.health;
        }
    }
});