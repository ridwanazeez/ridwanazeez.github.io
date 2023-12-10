<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="h-full">
    <div class="flex h-screen items-center justify-center">
      <div class="container m-auto px-5 py-24">
        <div class="mb-8 rounded-xl px-4 py-4 shadow-2xl">
          <div class="px-4 py-4 sm:px-6">
            <h3 class="text-center text-lg font-medium leading-6 text-gray-900 dark:text-white">
              My (Too Many) Online Accounts
            </h3>
            <p class="mt-1 text-center text-sm text-gray-500 dark:text-gray-200">
              I don't know what was the point of making this page
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 justify-items-center gap-8 lg:grid-cols-3">
          <div class="w-full rounded-xl p-8 shadow-2xl">
            <h4 class="text-center text-lg font-medium leading-6 text-gray-900 dark:text-white">
              Social Media
            </h4>
            <ul class="divide flex flex-col divide-y">
              <a href="https://www.facebook.com/Ridwan.Azeez00" target="_blank">
                <li class="flex flex-row">
                  <div class="flex flex-1 cursor-pointer select-none items-center p-4">
                    <div class="mr-4 flex h-10 w-10 flex-col items-center justify-center">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Facebook</title>
                        <path
                          fill="#1877F2"
                          d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                        />
                      </svg>
                    </div>
                    <div class="mr-auto flex-1 pl-1">
                      <div class="font-medium dark:text-white">Facebook</div>
                      <div class="text-sm text-gray-600 dark:text-gray-200">@Ridwan.Azeez00</div>
                    </div>
                    <button class="hidden justify-end text-right md:flex">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </a>
              <a href="https://www.instagram.com/ridwanazeez" target="_blank">
                <li class="flex flex-row">
                  <div class="flex flex-1 cursor-pointer select-none items-center p-4">
                    <div class="mr-4 flex h-10 w-10 flex-col items-center justify-center">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Instagram</title>
                        <path
                          fill="#E4405F"
                          d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                        />
                      </svg>
                    </div>
                    <div class="mr-auto flex-1 pl-1">
                      <div class="font-medium dark:text-white">Personal Instagram</div>
                      <div class="text-sm text-gray-600 dark:text-gray-200">@ridwanazeez</div>
                    </div>
                    <button class="hidden justify-end text-right md:flex">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </a>
              <a href="https://www.instagram.com/ridwanazeez.png" target="_blank">
                <li class="flex flex-row">
                  <div class="flex flex-1 cursor-pointer select-none items-center p-4">
                    <div class="mr-4 flex h-10 w-10 flex-col items-center justify-center">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Instagram</title>
                        <path
                          fill="#E4405F"
                          d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                        />
                      </svg>
                    </div>
                    <div class="mr-auto flex-1 pl-1">
                      <div class="font-medium dark:text-white">Art</div>
                      <div class="text-sm text-gray-600 dark:text-gray-200">@ridwanazeez.png</div>
                    </div>
                    <button class="hidden justify-end text-right md:flex">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </a>
              <a href="https://www.instagram.com/ridwanazeez.jpg" target="_blank">
                <li class="flex flex-row">
                  <div class="flex flex-1 cursor-pointer select-none items-center p-4">
                    <div class="mr-4 flex h-10 w-10 flex-col items-center justify-center">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Instagram</title>
                        <path
                          fill="#E4405F"
                          d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                        />
                      </svg>
                    </div>
                    <div class="mr-auto flex-1 pl-1">
                      <div class="font-medium dark:text-white">Photos</div>
                      <div class="text-sm text-gray-600 dark:text-gray-200">@ridwanazeez.jpg</div>
                    </div>
                    <button class="hidden justify-end text-right md:flex">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </a>
              <a href="https://www.linkedin.com/in/ridwanazeez" target="_blank">
                <li class="flex flex-row">
                  <div class="flex flex-1 cursor-pointer select-none items-center p-4">
                    <div class="mr-4 flex h-10 w-10 flex-col items-center justify-center">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>LinkedIn</title>
                        <path
                          fill="#0A66C2"
                          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                        />
                      </svg>
                    </div>
                    <div class="mr-auto flex-1 pl-1">
                      <div class="font-medium dark:text-white">LinkedIn</div>
                      <div class="text-sm text-gray-600 dark:text-gray-200">@ridwanazeez</div>
                    </div>
                    <button class="hidden justify-end text-right md:flex">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </a>
              <a href="https://www.pinterest.com/unsyncedemotion" target="_blank">
                <li class="flex flex-row">
                  <div class="flex flex-1 cursor-pointer select-none items-center p-4">
                    <div class="mr-4 flex h-10 w-10 flex-col items-center justify-center">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Pinterest</title>
                        <path
                          fill="#BD081C"
                          d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"
                        />
                      </svg>
                    </div>
                    <div class="mr-auto flex-1 pl-1">
                      <div class="font-medium dark:text-white">Pinterest</div>
                      <div class="text-sm text-gray-600 dark:text-gray-200">@unsyncedemotion</div>
                    </div>
                    <button class="hidden justify-end text-right md:flex">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </a>
              <a href="https://threads.net/ridwanazeez" target="_blank">
                <li class="flex flex-row">
                  <div class="flex flex-1 cursor-pointer select-none items-center p-4">
                    <div class="mr-4 flex h-10 w-10 flex-col items-center justify-center">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Threads</title>
                        <path
                          fill="#FFFFFF"
                          d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"
                        />
                      </svg>
                    </div>
                    <div class="mr-auto flex-1 pl-1">
                      <div class="font-medium dark:text-white">Threads</div>
                      <div class="text-sm text-gray-600 dark:text-gray-200">@ridwanazeez</div>
                    </div>
                    <button class="hidden justify-end text-right md:flex">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </a>
              <a href="https://www.tumblr.com/ridwanazeez" target="_blank">
                <li class="flex flex-row">
                  <div class="flex flex-1 cursor-pointer select-none items-center p-4">
                    <div class="mr-4 flex h-10 w-10 flex-col items-center justify-center">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Tumblr</title>
                        <path
                          fill="#FFFFFF"
                          d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z"
                        />
                      </svg>
                    </div>
                    <div class="mr-auto flex-1 pl-1">
                      <div class="font-medium dark:text-white">Tumblr</div>
                      <div class="text-sm text-gray-600 dark:text-gray-200">@ridwanazeez</div>
                    </div>
                    <button class="hidden justify-end text-right md:flex">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </a>
              <a href="https://www.twitter.com/unsyncedemotion" target="_blank">
                <li class="flex flex-row">
                  <div class="flex flex-1 cursor-pointer select-none items-center p-4">
                    <div class="mr-4 flex h-10 w-10 flex-col items-center justify-center">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>X</title>
                        <path
                          fill="#000000"
                          d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                        />
                      </svg>
                    </div>
                    <div class="mr-auto flex-1 pl-1">
                      <div class="font-medium dark:text-white">X</div>
                      <div class="text-sm text-gray-600 dark:text-gray-200">@unsyncedemotion</div>
                    </div>
                    <button class="hidden justify-end text-right md:flex">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </a>
            </ul>
          </div>
          <div class="w-full rounded-xl p-8 shadow-2xl">
            <h4 class="text-center text-lg font-medium leading-6 text-gray-900 dark:text-white">
              Misc
            </h4>
            <ul class="divide flex flex-col divide-y">
              <a href="https://www.behance.net/RidwanAzeez" target="_blank">
                <li class="flex flex-row">
                  <div class="flex flex-1 cursor-pointer select-none items-center p-4">
                    <div class="mr-4 flex h-10 w-10 flex-col items-center justify-center">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Behance</title>
                        <path
                          fill="#1769FF"
                          d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z"
                        />
                      </svg>
                    </div>
                    <div class="mr-auto flex-1 pl-1">
                      <div class="font-medium dark:text-white">Behance</div>
                      <div class="text-sm text-gray-600 dark:text-gray-200">@ridwanazeez</div>
                    </div>
                    <button class="hidden justify-end text-right md:flex">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </a>
              <a href="https://discordapp.com/users/165165109415510017" target="_blank">
                <li class="flex flex-row">
                  <div class="flex flex-1 cursor-pointer select-none items-center p-4">
                    <div class="mr-4 flex h-10 w-10 flex-col items-center justify-center">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Discord</title>
                        <path
                          fill="#5865F2"
                          d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                        />
                      </svg>
                    </div>
                    <div class="mr-auto flex-1 pl-1">
                      <div class="font-medium dark:text-white">Discord</div>
                      <div class="text-sm text-gray-600 dark:text-gray-200">@haxlol</div>
                    </div>
                    <button class="hidden justify-end text-right md:flex">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </a>
              <a href="https://github.com/ridwanazeez" target="_blank">
                <li class="flex flex-row">
                  <div class="flex flex-1 cursor-pointer select-none items-center p-4">
                    <div class="mr-4 flex h-10 w-10 flex-col items-center justify-center">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>GitHub</title>
                        <path
                          fill="#FFFFFF"
                          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                        />
                      </svg>
                    </div>
                    <div class="mr-auto flex-1 pl-1">
                      <div class="font-medium dark:text-white">GitHub</div>
                      <div class="text-sm text-gray-600 dark:text-gray-200">@ridwanazeez</div>
                    </div>
                    <button class="hidden justify-end text-right md:flex">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </a>
              <a href="https://www.twitch.tv/haxlol" target="_blank">
                <li class="flex flex-row">
                  <div class="flex flex-1 cursor-pointer select-none items-center p-4">
                    <div class="mr-4 flex h-10 w-10 flex-col items-center justify-center">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Twitch</title>
                        <path
                          fill="#9146FF"
                          d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"
                        />
                      </svg>
                    </div>
                    <div class="mr-auto flex-1 pl-1">
                      <div class="font-medium dark:text-white">Twitch</div>
                      <div class="text-sm text-gray-600 dark:text-gray-200">@haxlol</div>
                    </div>
                    <button class="hidden justify-end text-right md:flex">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </a>
            </ul>
          </div>
          <div class="w-full rounded-xl p-8 shadow-2xl">
            <h4 class="text-center text-lg font-medium leading-6 text-gray-900 dark:text-white">
              Alter Egos
            </h4>
            <ul class="divide flex flex-col divide-y">
              <a href="https://www.instagram.com" target="_blank">
                <li class="flex flex-row">
                  <div class="flex flex-1 cursor-pointer select-none items-center p-4">
                    <div class="mr-4 flex h-10 w-10 flex-col items-center justify-center">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Instagram</title>
                        <path
                          fill="#E4405F"
                          d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                        />
                      </svg>
                    </div>
                    <div class="mr-auto flex-1 pl-1">
                      <div class="font-medium dark:text-white">Instagram</div>
                      <div class="text-sm text-gray-600 dark:text-gray-200">?????????????</div>
                    </div>
                    <button class="hidden justify-end text-right md:flex">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </a>
              <a href="https://www.tumblr.com/lostdeepindarkthoughts" target="_blank">
                <li class="flex flex-row">
                  <div class="flex flex-1 cursor-pointer select-none items-center p-4">
                    <div class="mr-4 flex h-10 w-10 flex-col items-center justify-center">
                      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Tumblr</title>
                        <path
                          fill="#FFFFFF"
                          d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z"
                        />
                      </svg>
                    </div>
                    <div class="mr-auto flex-1 pl-1">
                      <div class="font-medium dark:text-white">Tumblr (Depressing Stuff)</div>
                      <div class="text-sm text-gray-600 dark:text-gray-200">
                        @lostdeepindarkthoughts
                      </div>
                    </div>
                    <button class="hidden justify-end text-right md:flex">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
