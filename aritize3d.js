document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".threed_buttons");
    if (target) {
        const modelId = target.dataset.modelid;
        const encodedId = btoa(modelId.toString());

        fetch('https://ncr.preqservices.com/ajax/models/check-model-status.php?action=check&modelid=' + encodedId)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'Active') {
                    target.style.display = 'block';
                } else {
                    target.style.display = 'none';
                }
            })
            .catch(error => {
                console.error("Error fetching model status:", error);
                target.style.display = 'none';
            });
    }
    const style = document.createElement("style");
    style.textContent = ` .btn{background-color:#007bff;color:#fff;padding:10px 20px;border:none;border-radius:5px;font-size:16px;cursor:pointer}.btn:hover{background-color:#0056b3}.custom-modal{display:none;position:fixed;z-index:9999;inset:0;background-color:rgb(0 0 0 / .6);justify-content:center;align-items:center}.modal-box{background:#fff;width:80%;max-width:1000px;border-radius:12px;overflow:hidden;display:flex;flex-direction:column}.modal-header{display:flex;justify-content:flex-end;padding:10px}.close-btn{font-size:28px;cursor:pointer;border:none;background:none}model-viewer{width:100%;height:500px}.model-id{text-align:center;padding:10px 0;font-weight:700;font-size:16px;color:#007bff}.modal-footer{display:flex;justify-content:space-around;padding:10px;border-top:1px solid #ccc;background-color:#f9f9f9;font-size:14px}.footer-icon{text-align:center;color:#333;cursor:pointer}.footer-icon span{display:block;font-size:12px;margin-top:4px}`;
    document.head.appendChild(style);
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    document.head.appendChild(script);
    const modal = document.createElement("div");
    modal.className = "custom-modal";
    modal.innerHTML = ` <div class="modal-box"><div class="modal-header"><button class="close-btn" title="Close">&times;</button></div><model-viewer id="viewer3D" src="" alt="3D model" camera-controls auto-rotate ar></model-viewer><div class="model-id" id="modelIdText">MODEL-ID</div><div class="modal-footer"><div class="footer-icon"><img src="https://img.icons8.com/ios-filled/24/share.png"/><span>Share</span></div><div class="footer-icon"><img src="https://img.icons8.com/ios-filled/24/settings.png"/><span>Settings</span></div><div class="footer-icon"><img src="https://img.icons8.com/ios-filled/24/camera.png"/><span>View in AR</span></div></div></div>`;
    document.body.appendChild(modal);
    const viewer = modal.querySelector("#viewer3D");
    const closeBtn = modal.querySelector(".close-btn");
    const modelIdText = modal.querySelector("#modelIdText");
    document.addEventListener("click", (e) => {
        if (e.target.matches(".threed_buttons[data-modelid]")) {
            
            viewer.src = "https://modelviewer.dev/shared-assets/models/Astronaut.glb";
            modelIdText.textContent = modelId;
            modal.style.display = "flex"
        }
        if (e.target === modal || e.target === closeBtn) {
            modal.style.display = "none";
            viewer.src = ""
        }
    })
})
