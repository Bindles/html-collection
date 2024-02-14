<script>
  let name = '';
  let email = '';
  let message = '';
  let search = '';
  let accountMenuItems = ['Login', 'Register', 'New Post'];

  function submitForm() {
    // You can add form submission logic here (this is just a placeholder).
    console.log('Form submitted:', name, email, message);
  }

  function handleMenuItemClick(item) {
    // Handle the menu item click (e.g., navigate to the selected page)
    console.log('Clicked:', item);
  }
</script>

<style>
  /* You can add custom styles here */
  .container {
    max-width: 600px;
    margin: 0 auto;
  }

  .form-row {
    margin-bottom: 1rem;
  }

  .search-input {
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
  }

  .account-dropdown {
    text-align: right;
  }
</style>

<div class="container">
  <h1>Welcome to My Svelte App!</h1>
  
  <!-- Form -->
  <div class="form-row">
    <label for="name">Name:</label>
    <input type="text" id="name" bind:value={name}>
  </div>

  <div class="form-row">
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={email}>
  </div>

  <div class="form-row">
    <label for="message">Message:</label>
    <textarea id="message" bind:value={message}></textarea>
  </div>

  <div class="form-row">
    <button on:click={submitForm}>Submit</button>
  </div>

  <!-- Search Input -->
  <div class="form-row">
    <input type="text" class="search-input" bind:value={search} placeholder="Search">
  </div>

  <!-- Account Dropdown -->
  <div class="account-dropdown">
    <label>Account:</label>
    <select on:change={() => handleMenuItemClick(event.target.value)}>
      {#each accountMenuItems as item (item)}
        <option value={item}>{item}</option>
      {/each}
    </select>
  </div>
</div>
