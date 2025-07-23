const navHTML = `
  <div class="nav-container">
    <div class="nav-logo">🌟 StoryLab</div>
    <input type="checkbox" id="nav-toggle" class="nav-toggle" />
    <label for="nav-toggle" class="nav-hamburger">
      <span></span><span></span><span></span>
    </label>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="create.html">Create</a></li>
      <li><a href="library.html">My Stories</a></li>
      <li><a href="comic.html">Comic Lab</a></li>
      <li><a href="about.html">About</a></li>
    </ul>
  </div>
`;
document.getElementById('main-nav').innerHTML = navHTML;

// Responsive nav styles
const style = document.createElement('style');
style.innerHTML = `
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7em 1.5em;
  position: relative;
}
.nav-logo {
  font-family: 'Fredericka the Great', cursive;
  font-size: 2rem;
  color: #fff;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px #7c4dff44;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 2em;
  margin: 0;
  padding: 0;
}
.nav-links li a {
  color: #fff;
  text-decoration: none;
  font-size: 1.1em;
  font-family: 'Comic Neue', cursive;
  transition: color 0.2s;
}
.nav-links li a:hover {
  color: #ffb6e6;
}
.nav-toggle {
  display: none;
}
.nav-hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
}
.nav-hamburger span {
  display: block;
  height: 4px;
  width: 100%;
  background: #fff;
  margin: 4px 0;
  border-radius: 2px;
  transition: 0.3s;
}
@media (max-width: 700px) {
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #7c4dff;
    flex-direction: column;
    gap: 0;
    display: none;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    box-shadow: 0 4px 16px #7c4dff22;
  }
  .nav-links li {
    text-align: center;
    padding: 1em 0;
  }
  .nav-toggle:checked + .nav-hamburger + .nav-links {
    display: flex;
  }
  .nav-hamburger {
    display: flex;
  }
}
`;
document.head.appendChild(style);