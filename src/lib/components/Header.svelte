<script>
	import { page } from '$app/stores';
</script>

<header>
	<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
  <div class="px-2 mx-2 navbar-start">
    <span class="text-lg font-bold">
            daisyUI
          </span>
  </div> 
	<ul class="hidden px-2 mx-2 navbar-center lg:flex menu horizontal">
		<li class:active={$page.path === '/'}>
			<a class="btn btn-ghost btn-sm rounded-btn" sveltekit:prefetch href="/">首页</a>
		</li>
		<li class:active={$page.path === '/category'}>
			<a class="btn btn-ghost btn-sm rounded-btn" sveltekit:prefetch href="/category">分类</a>
		</li>
		<li class:active={$page.path === '/shelf'}>
			<a class="btn btn-ghost btn-sm rounded-btn" sveltekit:prefetch href="/shelf">书架</a>
		</li>
		<li class="nav" class:active={$page.path === '/user'}>
			<a class="btn btn-ghost btn-sm rounded-btn" sveltekit:prefetch href="/user">我的</a>
		</li>
	</ul>
	  <div class="navbar-end">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">     
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>                     
      </svg>
    </button> 
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">             
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>             
      </svg>
    </button>
  </div>
</div>
</header>
