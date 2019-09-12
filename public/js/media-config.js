$(window).resize(function(){
    if($(window).width() <= 784){
        L2Dwidget.init({
        "react":{
            "opacityDefault":0.7,
            "opacityOnHover":0.3
        },
        "display":{
            "position":"right",
            "height":200,
            "width":100,
            "hOffset":0,

        },
        "model": {
            jsonPath: '/tororo/assets/tororo.model.json',
            
        },
    })
    }
    else{
        L2Dwidget.init({
            "react":{
                "opacityDefault":0.7,
                "opacityOnHover":0.3
            },
            "display":{
                "position":"left",
                "height":200,
                "width":100,
                "hOffset":50,
                "vOffset":-50
            },
            "model": {
                jsonPath: '/tororo/assets/tororo.model.json',
                
            },
        })
    }
  
})
