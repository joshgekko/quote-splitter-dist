(function(){
  const PASSWORD = "Audi0001!";
  let authed = false;

  function renderLogin() {
    const root = document.getElementById("root");
    root.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#f3f4f6">
        <div style="background:#fff;padding:2rem;border-radius:0.75rem;box-shadow:0 2px 6px rgba(0,0,0,0.1);width:300px">
          <h2 style="margin-bottom:1rem;text-align:center">Enter Password</h2>
          <input id="pwinput" type="password" style="width:100%;padding:0.5rem;margin-bottom:1rem;border:1px solid #ccc;border-radius:0.375rem" />
          <button id="pwbtn" style="width:100%;background:#2563eb;color:#fff;padding:0.5rem;border:none;border-radius:0.375rem">Login</button>
        </div>
      </div>
    `;
    document.getElementById("pwbtn").onclick = () => {
      const val = document.getElementById("pwinput").value;
      if(val === PASSWORD) {
        authed = true;
        renderApp();
      } else {
        alert("Wrong password");
      }
    }
  }

  function renderApp() {
    const root = document.getElementById("root");
    root.innerHTML = `
      <div style="padding:2rem;max-width:800px;margin:auto">
        <h1 style="font-size:1.5rem;font-weight:bold;margin-bottom:1rem">Quote Splitter & Prioritized Estimate</h1>
        <p>✅ You are logged in. From here the PDF parsing + color-coded estimate UI would appear (React app).<br/>
        This build is trimmed down for static deployment demo. We can expand this with the full UI bundle if you want.</p>
      </div>
    `;
  }

  if(!authed) renderLogin();
})();
