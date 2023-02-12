<template>
  <!-- navbar -->
  <nav class="
    relative
    w-full
    flex flex-wrap
    items-center
    justify-between
    py-4
    bg-gray-100
    text-gray-500
    hover:text-gray-700
    focus:text-gray-700
    shadow-lg
    navbar navbar-expand-lg navbar-light
    ">
    <div class="container-fluid w-full flex flex-wrap items-center px-6">
      <button class="
        navbar-toggler
        text-gray-500
        border-0
        hover:shadow-none hover:no-underline
        py-2
        px-2.5
        bg-transparent
        focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
      " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="w-6" role="img"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
          </path>
        </svg>
      </button>
      <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
        <RouterLink class="
          flex
          items-center
          text-gray-900
          hover:text-gray-900
          focus:text-gray-900
          mt-2
          lg:mt-0
          mr-auto
        " to="/" exact-active-class="no-active">
          府城印象
        </RouterLink>
        <!-- Left links -->
        <ul class="navbar-nav flex flex-col pl-0 list-style-none ms-auto">
          <li class="nav-item p-2">
            <RouterLink class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="/">首頁
            </RouterLink>
          </li>
          <li class="nav-item p-2">
            <RouterLink class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="attractions">體驗
            </RouterLink>
          </li>
          <!-- <li class="nav-item p-2">
            <RouterLink class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="shoppingCart">購物車
            </RouterLink>
          </li> -->
          <li class="nav-item dropdown relative">
            <a class="dropdown-toggle pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap"
              href="#" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">購物車
            </a>
            <ul class="
              dropdown-menu
              min-w-max
              absolute
              hidden
              bg-white
              text-base
              z-50
              float-left
              py-2
              list-none
              text-left
              rounded-lg
              shadow-lg
              mt-1
              hidden
              m-0
              bg-clip-padding
              border-none
            " aria-labelledby="dropdownMenuButton2">
              <li>
                <a class="
                  dropdown-item
                  text-sm
                  py-2
                  px-4
                  font-normal
                  block
                  w-full
                  whitespace-nowrap
                  bg-transparent
                  text-gray-700
                  hover:bg-gray-100
                " href="#">Action</a>
              </li>
              <li>
                <a class="
                    dropdown-item
                    text-sm
                    py-2
                    px-4
                    font-normal
                    block
                    w-full
                    whitespace-nowrap
                    bg-transparent
                    text-gray-700
                    hover:bg-gray-100
                  " href="#">Another action</a>
              </li>
              <li>
                <a class="
                    dropdown-item
                    text-sm
                    py-2
                    px-4
                    font-normal
                    block
                    w-full
                    whitespace-nowrap
                    bg-transparent
                    text-gray-700
                    hover:bg-gray-100
                  " href="#">Something else here</a>
              </li>
            </ul>
          </li>
          <!-- <RouterLink class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="shoppingCart">購物車
            </RouterLink> -->
          <li class="nav-item p-2">
            <RouterLink class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="login">訂購
            </RouterLink>
          </li>
          <li class="nav-item p-2">
            <RouterLink class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" to="login">登入
            </RouterLink>
          </li>
          <li class="nav-item p-2">
            <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">註冊</a>
          </li>
        </ul>
        <!-- Left links -->
      </div>
    </div>
  </nav>
  <main class="container mx-auto">
    <RouterView />
  </main>
  <!-- footer -->
  <footer>
    <p class="mx-auto py-3 text-gray-400 border-0 border-t border-solid border-gray-300 text-center">
      府城印象 @copyRight
    </p>
  </footer>
</template>
