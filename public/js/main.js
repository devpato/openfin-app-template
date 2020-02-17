// uncomment line below to register offline cache service worker
navigator.serviceWorker.register("../serviceworker.js");

if (typeof fin !== "undefined") {
    init();
} else {
    document.querySelector("#of-version").innerText =
        "The fin API is not available - you are probably running in a browser.";
}

//once the DOM has loaded and the OpenFin API is ready
async function init() {
    let platform = await fin.Platform.getCurrent();
    let myWinIdentity = await platform.createWindow({
        contextMenu: true,
        layout: {
            content: [
                {
                    type: "stack"
                }
            ]
        }
    });

    // The `platform`and `myWinIdentity` here are the objects we captured in step 2
    platform.createView(
        {
            // View Configuration Options
            name: "my-new-test-view-2",
            url: "http://www.firebase.com"
        },
        myWinIdentity // Target Identity
    );

    // The `platform` here is the object we captured in step 2
    const mySnapshot = await platform.getSnapshot();
    console.log(mySnapshot);

    // The `platform` here is the object we captured in step 2
    // platform.applySnapshot(mySnapshot, { closeExistingWindows: true });
}
