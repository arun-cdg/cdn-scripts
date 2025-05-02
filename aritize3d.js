
const cdg_urlParams = new URLSearchParams(window.location.search);
    const cdg_quickAR = cdg_urlParams.get('quick-ar-open');
  
    const button = document.querySelector("[data-threedy-web-id]");
    const target = button.getAttribute("data-threedy-web-id");
    if (target) {
        const encodedId = btoa(target.toString());

        fetch('https://ncr.preqservices.com/ajax/models/get-models.php?action=checkstatus&modelid=' + encodedId)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'Active') {
                    button.style.display = 'block';
                     document.querySelector('.threedy-3d-btn').style.display = 'block';
                    if (cdg_quickAR === "1") {
                        const cdg_view_3d_btn = document.querySelector("[data-threedy-web-id]");
                        if (cdg_view_3d_btn) {
                          cdg_view_3d_btn.click();
                        } else {
                          console.warn("No .threed_button found on the page!");
                        }
                      }
                } else {
                    target.style.display = 'none';
                }
            })
            .catch(error => {
                console.error("Error fetching model status:", error);
            });
    }

    const style = document.createElement("style");
    style.textContent = `.threedy-embed-btn {
    display: inline-block;
    height: 50px;
    padding: 12px 32px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
    background: linear-gradient(90deg, #0038a8 0%, #4a57c8 100%);
    border-radius: 8px;
    cursor: pointer;
    border: none;
}

.threedy-embed-btn:hover {
    background-color: #0056b3
}

.cdg-custom-modal {
    display: none;
    position: fixed;
    z-index: 9999;
    inset: 0;
    background-color: rgb(0 0 0 / .6);
    justify-content: center;
    align-items: center
}

.cdg-ar-custom-modal {
    display: none;
    position: fixed;
    z-index: 9999;
    inset: 0;
    background-color: rgb(0 0 0 / .6);
    justify-content: center;
    align-items: center
}

.cdg-modal-box {
    background: #fff;
    width: 100%;
    max-width: 75%;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 90%;
    overflow: auto;
}

.cdg-modal-header {
    display: flex;
    justify-content: flex-end;
    padding: 10px
}

.cdg-close-btn {
    font-size: 28px;
    cursor: pointer;
    border: none;
    background: none
}

model-viewer {
    width: 100%;
    height: 85%;
}

.cdg-model-id {
    text-align: center;
    padding: 10px 0;
    font-weight: 700;
    font-size: 16px;
    color: #007bff
}

.cdg-modal-footer {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    border-top: 1px solid #ccc;
    background-color: #fff;
    font-size: 14px
}

.cdg-instructions {
    display: flex;
    justify-content: space-around;
    margin: 70px 0;
}

.cdg-instruction {
    max-width: 100%;
}

.cdg-icon{
    height: 125px;
}

.cdg-instruction_button {
    background-color: #2c3150;
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    width: 250px;
}

.cdg-instruction_button:hover {
    background-color: #1f2237;
}

.cdg-instruction_text{
    color: #353E5A;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-decoration: none solid rgb(53, 62, 90);
    text-align: center;
    word-spacing: 0px;
}

.cdg-instruction_head{
    font-size: 20px;
    font-weight: 800;
    line-height: 26px;
    color: #353E31;
    text-decoration: none solid rgb(53, 62, 90);
    text-align: center;
    word-spacing: 0px;
}


.cdg_d-none{
    display: none;
}

.cdg-footer-icon {
    text-align: center;
    color: #333;
    cursor: pointer
}

.cdg-footer-icon span {
    display: block;
    font-size: 12px;
    margin-top: 4px
}

/* Popups */
.cdg-popup {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  padding: 30px;
  z-index: 9999;
  width: 300px;
  text-align: center;
}

.cdg-popup.show {
  display: block;
}

.cdg-popup-content h2 {
  margin-top: 0;
  font-size: 24px;
  margin-bottom: 15px;
}

.cdg-popup-content p {
  font-size: 16px;
  margin-bottom: 25px;
}

.cdg-popup-close-btn {
  padding: 8px 20px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.cdg-popup-close-btn:hover {
  background-color: #c0392b;
}

  .cdg-popup-content h2 {
    color: #0c163f;
    margin-bottom: 10px;
  }
  
  .cdg-popup-content p {
    color: #555;
    margin-bottom: 20px;
    font-size: 14px;
  }
  
  .cdg-share-link {
    background: #f1f1f5;
    padding: 10px;
    border-radius: 6px;
    color: #333;
    margin-bottom: 20px;
    font-size: 14px;
    overflow-x: auto;
  }
  
  .cdg-link-copy-button {
    background: #2c3150;
    color: white;
    border: none;
    padding: 12px;
    width: 100%;
    border-radius: 8px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  }
  
  .cdg-link-copy-button:hover {
    background: #1e2238;
  }
  
  .cdg-link-copy-icon {
    font-size: 18px;
  }

.cdg-back-btn {
  padding: 10px 15px;
  margin: 5px;
  border: none;
  cursor: pointer;
  background: #eee;
  border-radius: 5px;
  width: 100%;
}

.cdg-back-btn.cdg-active {
  background: #007bff;
  color: #fff;
}

.cdg-popup-content_h2 {
  font-size: 22px;
  margin-bottom: 20px;
  color: #1d1f2b;
}

.cdg-popup-content_p {
  font-size: 15px;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.4;
}

.cdg-qr-container {
  margin: 20px 0;
}

.cdg-qr-container img {
  width: 180px;
  height: 180px;
  object-fit: contain;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  border-radius: 8px;
}

.cdg-note-box {
  background: #f5f5f7;
  padding: 12px;
  border-radius: 10px;
  margin: 20px 0;
  font-size: 12px;
  color: #666;
  text-align: center;
}

.cdg-note-box p {
  margin: 4px 0;
}

.cdg-got-it-close-btn {
  margin-top: 20px;
  padding: 10px 30px;
  background-color: #1d1f2b;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.cdg-got-it-close-btn:hover {
  background-color: #333647;
}

/* ar model */
.cdg-ar-model {
  display: block;
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  padding: 15px;
  width: auto;
  text-align: center;
  max-height: 90%;
  overflow: auto;
}

.cdg-ar-model-close-btn {
    font-size: 28px;
    cursor: pointer;
    border: none;
    background: none
}

.cdg-ar-popup-content_h2 {
  font-size: 22px;
  margin-bottom: 20px;
  color: #1d1f2b;
}

.cdg-ar-popup-content_p {
  font-size: 15px;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.4;
}

.cdg-ar-qr-container {
  margin: 20px 0;
}

.cdg-ar-qr-container img {
  width: 180px;
  height: 180px;
  object-fit: contain;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  border-radius: 8px;
}

.cdg-ar-note-box {
  background: #f5f5f7;
  padding: 12px;
  border-radius: 10px;
  margin: 20px 0;
  font-size: 12px;
  color: #666;
  text-align: center;
}

.cdg-ar-note-box p {
  margin: 4px 0;
}

.cdg-ar-got-it-close-btn {
  margin-top: 20px;
  padding: 10px 30px;
  background-color: #1d1f2b;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.cdg-ar-got-it-close-btn:hover {
  background-color: #333647;
}

.mobile-insctructions {
    padding: 20px;
    position: relative;
    text-align: center;
  }

  .mobile-insctructions h2 {
    font-size: 30px;
    margin-bottom: 16px;
    color: #333;
  }

  .mobile-insctructions img.main-img {
    width: 100%;
    max-height: 150px;
    object-fit: contain;
    margin-bottom: 12px;
  }

  .mobile-insctructions p {
    font-size: 25px;
    color: #555;
    margin-bottom: 20px;
  }

  .mobile-insctructions-ar-actions {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .mobile-insctructions-ar-box {
    flex: 1;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
  }

  .mobile-insctructions-ar-box img {
    width: 30px;
    height: 30px;
    margin-bottom: 6px;
  }

  .mobile-insctructions-ar-box span {
    display: block;
    font-size: 13px;
    color: #333;
  }

    .desktop-insctructions {
      display: block;
    }

    .mobile-insctructions {
      display: none;
    }

    @media screen and (max-width: 767px) {
      .desktop-insctructions {
        display: none;
      }

      .mobile-insctructions {
        display: block;
      }
    }

`;
    document.head.appendChild(style);
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    document.head.appendChild(script);

    const meta_1 = document.createElement("meta");
    meta_1.charset = "UTF-8";
    document.head.appendChild(meta_1);

    const meta_2 = document.createElement("meta");
    meta_2.name = "viewport";
    meta_2.content = "width=device-width, initial-scale=1.0";
    document.head.appendChild(meta_2);

    const cdg_modal = document.createElement("div");
    cdg_modal.className = "cdg-custom-modal";
    cdg_modal.style.display = "none";
    cdg_modal.innerHTML = `
        <div class="cdg-modal-box">
            <div class="cdg-modal-header">
                <button class="cdg-close-btn" title="Close">&times;</button>
            </div>
            <div class="cdg-modal-body">
                <div class="cdg-modal-info" style="display: none;">
                    
                </div>
                <div class="modal-loader cdg-load_1" style="background: url(https://ncr.preqservices.com/asset/nextech.gif) no-repeat scroll center left transparent;background-position: center;margin: auto;width: 120px;height: 120px;padding-top: 90px;background-size: 90px !important;font-weight: normal;font-size: 18px;line-height: 26px;color: #495057;text-align: center;">
                    <center><p style="padding: 50px 0;" id="cdg-load_per">Loading...</p></center>
                </div>
                <div class="cdg-model-view cdg-load_2 cdg_d-none">
                    <div class="desktop-insctructions">
                        <center><h2 class="cdg-instruction_head">How to Use Our 3D Viewer</h2></center>
                        <div class="cdg-instructions">
                            <div class="cdg-instruction">
                                <center>
                                    <div class="cdg-icon" style="background: url(https://ncr.preqservices.com/asset/desk-move.svg) no-repeat scroll center left transparent;background-position: center;">
                                        <p><strong>Rotate</strong></p>
                                    </div>
                                </center>
                                <p class="cdg-instruction_text">Hold click and drag your mouse to rotate the object 360*</p>
                            </div>
                            <div class="cdg-instruction">
                                <center>
                                    <div class="cdg-icon" style="background: url(https://ncr.preqservices.com/asset/desk-zoom.svg) no-repeat scroll center left transparent;background-position: center;">
                                        <p><strong>Zoom in/out</strong></p>
                                    </div>
                                </center>
                                <p class="cdg-instruction_text">To zoom in and out, scroll your mouse wheel or use the zoom tool.</p>
                            </div>
                            <div class="cdg-instruction">
                                <center>
                                    <div class="cdg-icon" style="background: url(https://ncr.preqservices.com/asset/desk-pan.svg) no-repeat scroll center left transparent;background-position: center;">
                                        <p><strong>Pan</strong></p>
                                    </div>
                                </center>
                                <p class="cdg-instruction_text">Hold CTRL and drag your mouse to pan the object.</p>
                            </div>
                        </div>
                    </div>
                    <div class="mobile-insctructions">
                        <h2>How to use our AR Viewer</h2>
                        <img src="https://ncr.preqservices.com/asset/mob-ar.svg" alt="AR diagram" class="main-img">
                        <p>Aim your camera at the floor or a flat surface to anchor your object.</p>

                        <div class="mobile-insctructions-ar-actions">
                        <div class="mobile-insctructions-ar-box">
                            <div class="cdg-icon" style="background: url(https://ncr.preqservices.com/asset/mob-rotate.svg) no-repeat scroll center left transparent;background-position: center;">
                                <p><strong>Rotate</strong></p>
                            </div>
                        </div>
                        <div class="mobile-insctructions-ar-box">
                                <div class="cdg-icon" style="background: url(https://ncr.preqservices.com/asset/mob-zoom.svg) no-repeat scroll center left transparent;background-position: center;">
                                    <p><strong>Zoom in/out</strong></p>
                                </div>
                        </div>
                        </div>

                        <p style="margin-top: 25px; font-size: 13px; color: #666;">
                        Press and drag the object to rotate it 360. Pinch and expand to zoom in and out.
                        </p>
                    </div>
                        <center><button id="cdg-gotItButton" class="cdg-instruction_button">Got it!</button></center>
                </div>
                <div class="cdg-modal-ar-qr" style="display: none;">

                </div>
            
            </div>
            <model-viewer id="cdg-viewer3D" src="" alt="3D model" camera-controls auto-rotate ar class="cdg-load_3 cdg_d-none"></model-viewer>
            <div class="cdg-model-id cdg-load_3 cdg_d-none" id="cdg_modelIdText">MODEL-ID</div>
            <div class="cdg-modal-footer cdg-load_3 cdg_d-none">
                <div class="cdg-footer-icon cdg-footer-btn" data-popup="cdg-popupShare" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                </svg><span>Share</span></div>
                <div class="cdg-footer-icon cdg-footer-btn" data-popup="cdg-popupSettings" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                </svg><span>Settings</span></div>
                <div class="cdg-footer-icon cdg-footer-btn" data-popup="cdg-popupAR" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-badge-ar" viewBox="0 0 16 16">
                <path d="m3.794 11 .47-1.542H6.27L6.739 11H8L5.996 5.001H4.607L2.595 11zm1.503-4.852.734 2.426h-1.52l.734-2.426zm5.598-1.147H8.5V11h1.173V8.763h1.064L11.787 11h1.327L11.91 8.583C12.455 8.373 13 7.779 13 6.9c0-1.147-.773-1.9-2.105-1.9zm-1.222 2.87V5.933h1.05c.63 0 1.05.347 1.05.989 0 .633-.408.95-1.067.95z"/>
                <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
                </svg><span>View in AR</span></div>
            </div>
            <!-- Popups -->
            <div id="cdg-popupShare" class="cdg-popup">
                <div class="cdg-popup-content">
                    <h2 style="display: flex;justify-content: space-between;">Share Product <button class="cdg-popup-close-btn">x</button></h2>
                    <p>Copy this link to share your product with others</p>
                    <input type="text" id="cdg-share-link" value="${window.location.href}" class="cdg-share-link" readonly>
                    <button class="cdg-link-copy-button" id="cdg-link-copy-button">
                        Copy Link
                    </button>
                </div>
            </div>

            <div id="cdg-popupSettings" class="cdg-popup">
                <div class="cdg-popup-content">
                    <h2 style="display: flex;justify-content: space-between;padding-bottom: 10px;">Settings <button class="cdg-popup-close-btn">x</button></h2>
                    <button class="cdg-back-btn cdg-active" data-color="#ffffff">Light Background</button>
                    <button class="cdg-back-btn" data-color="#b2b2b2">Medium Background</button>
                    <button class="cdg-back-btn" data-color="#666666">Dark Background</button>
                </div>
            </div>

            <div id="cdg-popupAR" class="cdg-popup" style="width: auto;">
                <div class="cdg-popup-content">
                   <div class="cdg-modal-ar-qr" style="display: block;">
                        <div class="cdg-qr-par">
                            <center>
                                <h3>Scan the QR code to view in AR</h3>
                                <p>Use your mobile device camera app to scan the code below.<br>
                                    Tap the code that appears to launch this object in Augmented Reality.</p>
                                <div class="cdg-qr-img" id="cdg-qr-img">
                                    QR Loading...
                                </div>
                                <br><br>
                                <div class="cdg-qr-text">
                                    <b>Note</b> May not be compatible with older devices <br>
                                    <b>Disclaimer</b> The 3D product model is indicative only.
                                </div>
                               <button class="cdg-got-it-close-btn">Got it!</button>
                            </center>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    `;
    document.body.appendChild(cdg_modal);

    const cdg_ar_modal = document.createElement("div");
    cdg_ar_modal.className = "cdg-ar-custom-modal";
    cdg_ar_modal.style.display = "none";
    cdg_ar_modal.innerHTML = `
        <div class="cdg-ar-model">
            <div class="cdg-modal-header">
                <button class="cdg-ar-model-close-btn" title="Close">&times;</button>
            </div>
            <div class="cdg-modal-body">
                <div class="show">
                    <div class="cdg-ar-popup-content">
                        <div class="cdg-modal-ar-qr">
                            <div class="cdg-qr-par">
                                <center>
                                    <h2 class="cdg-ar-popup-content_h2">Scan the QR code to view in AR</h2>
                                    <p class="cdg-ar-popup-content_p">Use your mobile device camera app to scan the code below.<br>
                                        Tap the code that appears to launch this object in Augmented Reality.</p>
                                    <div class="cdg-ar-qr-container" id="cdg-ar-qr-img">
                                        QR Loading...
                                    </div>
                                    <br><br>
                                    <div class="cdg-ar-note-box">
                                        <b>Note</b> May not be compatible with older devices <br>
                                        <b>Disclaimer</b> The 3D product model is indicative only.
                                    </div>
                                   <button class="cdg-ar-got-it-close-btn">Got it!</button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(cdg_ar_modal);


    const cdg_viewer = cdg_modal.querySelector("#cdg-viewer3D");
    const cdg_closeBtn = cdg_modal.querySelector(".cdg-close-btn");
    const cdg_ar_closeBtn = cdg_ar_modal.querySelector(".cdg-ar-model-close-btn");
    const cdg_ar_gotitBtn = cdg_ar_modal.querySelector(".cdg-ar-got-it-close-btn");
    const cdg_modelIdText = cdg_modal.querySelector("#cdg_modelIdText");
    const cdg_load_1 = cdg_modal.querySelector(".cdg-load_1");
    const cdg_load_2 = cdg_modal.querySelector(".cdg-load_2");
    const cdg_load_3 = cdg_modal.querySelectorAll(".cdg-load_3");

    let cdg_insert_id;
    let cdg_model_fetch_status = false;
    document.addEventListener("click", (e) => {
        const button = e.target.closest("[data-threedy-web-id]");
        const cdg_button_text = e.target.textContent.trim();

        if (button) {
            const modelId = button.getAttribute("data-threedy-web-id");
            const filetype = button.getAttribute("data-threedy-sku");
            const platform = navigator.platform.toLowerCase();
            const domain = window.location.hostname;
            const genKey = domain + modelId;
            const clientAccessKey = btoa(domain.toString());
            const encodedId = btoa(modelId.toString());
            const userAgent = navigator.userAgent;

            // console.log('platform', platform);
            // console.log('domain', domain);
            // console.log('genKey', genKey);
            // console.log('clientAccessKey', clientAccessKey);
            
            if(cdg_button_text == 'View in AR'){
                cdg_ar_modal.style.display = "flex"; // First open the modal
            }
            else{
                cdg_modal.style.display = "flex"; // First open the modal
                cdg_modelIdText.textContent = modelId.toUpperCase();;
                // cdg_viewer.src = ""; // Clear previous model immediately
            }

            if(!cdg_model_fetch_status){

                fetch("https://api.ipify.org?format=json")
                    .then(response => response.json())
                    .then(ipData => {
                        fetch(`https://ncr.preqservices.com/ajax/models/get-models.php?action=getfile&platform=${platform}&domain=${domain}&modelid=${encodedId}&ip=${ipData.ip}&useragent=${userAgent}&filetype=${filetype}`)
                            .then(response => response.json())
                            .then(data => {
                                console.log(data);
                                if (data.status === 'Ok' && data.file_url) {
                                    loadGLBFromStaticPath(data.file_url);
                                    var ar_uri = `https://ncr.preqservices.com/ar/ar.php?modelid=${encodedId}&filetype=${filetype}&domain=${domain}`;
                                   
                                    document.getElementById('cdg-qr-img').innerHTML = '<img src="https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(ar_uri) + '&size=150x150">';
                                    document.getElementById('cdg-ar-qr-img').innerHTML = '<img src="https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(ar_uri) + '&size=150x150">';
    
                                    cdg_insert_id = data.insert_id;
                                    cdg_model_fetch_status = true;
                                } else {
                                    console.warn("Model inactive or no file");
                                }
                            })
                            .catch(error => {
                                console.error("Error fetching 3D model:", error);
                            });
                    })
                    .catch(error => {
                        console.error("Error getting IP address:", error);
                    });
            }

            // handleInstructionsToggle();

        }

        async function loadGLBFromStaticPath(staticPath) {
            cdg_load_1.classList.remove('cdg_d-none');
            cdg_load_2.classList.add('cdg_d-none');
            cdg_load_3.forEach(function(element) {
                element.classList.add('cdg_d-none');
            });
            try {
                // Fetch the .glb file from the static path
                const response = await fetch(staticPath);
                if (!response.ok) {
                    throw new Error('Failed to fetch the model');
                }
    
                // Total size of the content
                const contentLength = response.headers.get('Content-Length');
                const total = contentLength ? parseInt(contentLength, 10) : 0;
                let loaded = 0;
    
                // Create a ReadableStream to track progress
                const reader = response.body.getReader();
                const chunks = []; // To store the chunks of data
    
                while (true) {
                    const {
                        done,
                        value
                    } = await reader.read();
                    if (done) break;
    
                    // Push the chunk to the chunks array
                    chunks.push(value);
                    loaded += value.length;
    
                    // Calculate percentage
                    const percentage = total ? (loaded / total) * 100 : 0;
                    // console.log(percentage);
                    
                    document.getElementById('cdg-load_per').innerText = percentage.toFixed(2) + '%';
                }
    
                // Concatenate all chunks into a single Blob
                const blob = new Blob(chunks);
    
                // Create a URL for the Blob
                const blobUrl = URL.createObjectURL(blob);
                cdg_viewer.src = blobUrl;

                cdg_load_1.classList.add('cdg_d-none');
                if (localStorage.getItem('cdg-instruction') === 'true') {
                    cdg_load_3.forEach(function(element) {
                        element.classList.remove('cdg_d-none');
                    });
                }
                else{
                    cdg_load_2.classList.remove('cdg_d-none');
                }

                return blobUrl;
    
            } catch (error) {
                console.error('Error loading GLB file:', error);
            }
        }

        // Close modal
        if (e.target === cdg_modal || e.target === cdg_closeBtn) {
            cdg_modal.style.display = "none";
            // cdg_viewer.src = "";

            fetch(`https://ncr.preqservices.com/ajax/models/get-models.php?action=closefile&insert_id=${cdg_insert_id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error fetching 3D model:", error);
            });
        }

        // Close AR modal
        if (e.target === cdg_ar_modal || e.target === cdg_ar_closeBtn  || e.target === cdg_ar_gotitBtn) {
            cdg_ar_modal.style.display = "none";
            console.log("clicked");
            
            // cdg_viewer.src = "";
        }

          // First, grab the button
        const cdg_gotItButton = document.getElementById('cdg-gotItButton');

        // Then, listen for the click
        cdg_gotItButton.addEventListener('click', function() {
            // When clicked, save something to localStorage
            localStorage.setItem('cdg-instruction', 'true');

            cdg_load_2.classList.add('cdg_d-none');
            cdg_load_3.forEach(function(element) {
                element.classList.remove('cdg_d-none');
            });
        });

        // Select all the buttons and popups
        const footerButtons = document.querySelectorAll('.cdg-footer-btn');
        const popups = document.querySelectorAll('.cdg-popup');
        const closeButtons = document.querySelectorAll('.cdg-popup-close-btn');
        const gotitButton = document.querySelector('.cdg-got-it-close-btn');

        // Open the correct popup
        footerButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popupId = button.getAttribute('data-popup');
            
            // Close all popups first
            popups.forEach(p => p.classList.remove('show'));
            
            // Open the selected one
            document.getElementById(popupId).classList.add('show');
        });
        });

        // Close popup when clicking the close button
        closeButtons.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            closeBtn.closest('.cdg-popup').classList.remove('show');
        });
        });

        gotitButton.addEventListener('click', () => {
            gotitButton.closest('.cdg-popup').classList.remove('show');
            cdg_modal.style.display = "none";
            cdg_viewer.src = "";
        });

        // Optional: Close popup by clicking outside
        // window.addEventListener('click', (e) => {
        // popups.forEach(popup => {
        //     if (e.target === popup) {
        //     popup.classList.remove('show');
        //     }
        // });
        // });

        // cdg_closeBtn.addEventListener('click', () => {

        // });
        const cdg_link_copyButton = document.getElementById('cdg-link-copy-button');
        const cdg_linkInput = document.getElementById('cdg-share-link');
      
        cdg_link_copyButton.addEventListener('click', () => {
          cdg_linkInput.select();
          cdg_linkInput.setSelectionRange(0, 99999); // For mobile devices
      
          document.execCommand('copy');
      
          // Optional: show feedback
          cdg_link_copyButton.innerHTML = 'Copied!';
          setTimeout(() => {
            cdg_link_copyButton.innerHTML = 'Copy Link';
          }, 2000);
        });

        const cdg_back_buttons = cdg_modal.querySelectorAll('.cdg-back-btn');

        cdg_back_buttons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Change viewer background
            const color = button.getAttribute('data-color');
            cdg_viewer.style.backgroundColor = color;

            // 2. Remove 'cdg-active' from all buttons
            cdg_back_buttons.forEach(btn => btn.classList.remove('cdg-active'));

            // 3. Add 'cdg-active' to the clicked button
            button.classList.add('cdg-active');
        });
        });

        let currentUrl = window.location.href;

        if (!currentUrl.includes('quick-ar-open=1')) {
            // Check if URL already has other parameters
            if (currentUrl.includes('?')) {
                currentUrl += '&quick-ar-open=1';
            } else {
                currentUrl += '?quick-ar-open=1';
            }
        }
    
        // Now set it to the input
        document.getElementById('cdg-share-link').value = currentUrl;
    
    });
    const threedybutton = document.querySelector('.threedy-3d-btn.threedy-embed-btn');

    const svgIcon = ` &nbsp;
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
        </svg>
    `;
    
    threedybutton.insertAdjacentHTML('beforeend', svgIcon);
    const threedyarbutton = document.querySelector('.threedy-qar-btn.threedy-embed-btn');

    const svgarIcon = ` &nbsp;
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-upc-scan" viewBox="0 0 16 16">
  <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0z"/>
</svg>
    `;
    
    threedyarbutton.insertAdjacentHTML('beforeend', svgarIcon);
    // function handleInstructionsToggle() {
    //     const isMobile = window.innerWidth <= 767;
    //     console.log(window.innerWidth);
    //     console.log(isMobile);
        
    //     const desktopEl = document.querySelector('.desktop-instructions');
    //     const mobileEl = document.querySelector('.mobile-instructions');
    //     console.log(desktopEl);
    //     console.log(mobileEl);
        
    //     if (desktopEl && mobileEl) {
    //       desktopEl.style.display = isMobile ? 'none' : 'block';
    //       mobileEl.style.display = isMobile ? 'block' : 'none';
    //     }
    //   }
      
    //   // Initial check
    //   handleInstructionsToggle();
      
    //   // Re-check on resize
    //   window.addEventListener('resize', handleInstructionsToggle);
      
