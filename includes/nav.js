

let nav = `
<a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    <span class="fs-4">Dashboard</span>
</a>
<hr>
<ul class="nav nav-pills flex-column mb-auto">

    <li class="nav-item">
        <a href="./horizontal.html" class="nav-link text-white" aria-current="page">
            <i class="fas fa-home"></i>&nbsp;Top Navigation
        </a>
    </li>
    <li class="nav-item">
        <a href="./index.html" class="nav-link text-white ${active == 'home' && 'active'}" aria-current="page">
            <i class="fas fa-home"></i>&nbsp;Home
        </a>
    </li>
    <li class="nested nav-item">
        <button class="btn btn-toggle align-items-center rounded ${(active == 'list' || active == 'create') && 'active'}" data-bs-toggle="collapse"
            data-bs-target="#orders-collapse" aria-expanded="true">
            <i class="fas fa-cog"></i>&nbsp;CRUD
            <span class="dropdown-icon"><i class="fas fa-sort-down"></i></span>
        </button>
        <div class="collapse ${(active == 'list' || active == 'create') && 'show'}" id="orders-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small dropdown-menu-dark">
                <li><a class="dropdown-item ${active == 'create' && 'active'}" href="./form-elements.html">Create</a></li>
                <li>
                    <a class="dropdown-item" href="#">Update</a>
                </li>
                <li><a class="dropdown-item ${active == 'list' && 'active'}" href="./table.html">List</a></li>
            </ul>
        </div>
    </li>


    <li>
        <a href="fullcalender.html" class="nav-link text-white ${active == 'fullcalender' && 'active'}">
            <i class="fas fa-calendar-alt"></i>
            Fullcalender
        </a>
    </li>

    <li>
        <a href="login.html" class="nav-link text-white">
            <i class="fas fa-cogs"></i>
            Login
        </a>
    </li>

    <li>
        <a href="register.html" class="nav-link text-white">
            <i class="fas fa-cogs"></i>
            Register
        </a>
    </li>
</ul>
<hr>
<div class="dropdown">
    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://avatars.githubusercontent.com/u/26044286?v=4" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>User</strong>
    </a>
    <ul class="dropdown-menu dropdown-menu-dark text-small shadow active" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item active" href="./profile.html">Profile</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
    </ul>
</div>
`


document.getElementById('sidebar').innerHTML = nav;


const navbtn = document.getElementById('navbar-toggler');
const sidebar = document.getElementById('sidebar');
const mainwrapper = document.getElementById('main-wrapper');
const footer = document.querySelector('footer');
navbtn.addEventListener('click', () => {
    trigger()
})

window.onload = () => {
    if(screen.width < 800 || window.innerWidth < 800){
        trigger()
    }
}


function trigger() {
    sidebar.classList.toggle('active');
    mainwrapper.classList.toggle('active');
    footer.classList.toggle('active');
}






// other navs 
{/* <li>
<a href="#" class="nav-link text-white">
    <i class="fas fa-cog"></i>
    Products
</a>
</li>
<li>
<a href="#" class="nav-link text-white">
    <i class="fas fa-users"></i>
    Customers
</a>
</li>

<li>
<a href="#" class="nav-link text-white">
    <i class="fas fa-users"></i>
    Settings
</a>
</li>

<li>
<a href="#" class="nav-link text-white">
    <i class="fas fa-users"></i>
    Blogs
</a>
</li>

<li>
<a href="#" class="nav-link text-white">
    <i class="fas fa-cog"></i>
    Pages
</a>
</li>

<li>
<a href="#" class="nav-link text-white">
    <i class="fas fa-cogs"></i>
    Site Settings
</a>
</li>
<li>
<a href="#" class="nav-link text-white">
    <i class="fas fa-cogs"></i>
    Options
</a>
</li>
<li>
<a href="#" class="nav-link text-white">
    <i class="fas fa-cogs"></i>
    Reports
</a>
</li>
<li>
<a href="#" class="nav-link text-white">
    <i class="fas fa-cogs"></i>
    Users
</a>
</li> */}