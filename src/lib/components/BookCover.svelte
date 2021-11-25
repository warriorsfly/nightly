<script lang="typescript">
  import type {Book} from "$lib/models/Book";
  export let book:Book;
</script>

<div class="card shadow-xl image-full">
  <figure>
    <img src={book.cover} alt=""/>
  </figure> 
  <div class="justify-end card-body">
    <h2 class="card-title">{book.name}</h2> 
    <p>{book.description}</p> 
    <div class="card-actions">
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> 