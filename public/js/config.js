setTimeout(()=>{
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
},1000)