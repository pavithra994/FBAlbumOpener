function fbRightClicked(data){
    let er = true
    if(data.menuItemId && data.linkUrl){
        let fb_url = new URL(data.linkUrl);
        let url_parm = new URLSearchParams(fb_url.search.slice(1));
        
        let album_id = url_parm.get("set");
        if (album_id != null){
            if(album_id.match(/^a.\d*$/g)){
                let fb_album_url = "https://www.facebook.com/media/set/?set="+album_id +"&type=3";
                console.log(fb_album_url);
                window.open(fb_album_url,"_blank");
                er = false;
            }
        };

        if (er){
            alert("Something wrong in this url:\n"+ data.linkUrl);
        };
    };
    

};


chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "id": "fbAlbum",
        "title": "FB_Albem",
        "contexts": ["selection","link"]
    });


    chrome.contextMenus.onClicked.addListener(fbRightClicked);
});