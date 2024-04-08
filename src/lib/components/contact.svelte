<script lang="ts">
  import { onMount } from "svelte";
  onMount(() => {
    document
      .getElementById("inquiry-form")
      .addEventListener("submit", function (event) {
        // Fetch form fields
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        // Basic validation
        if (name === "") {
          alert("Please enter your preferred name.");
          event.preventDefault();
          return false;
        }

        if (email === "") {
          alert("Please enter your email address.");
          event.preventDefault();
          return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          alert("Please enter a valid email address.");
          event.preventDefault();
          return false;
        }

        if (message === "") {
          alert("Please enter your message.");
          event.preventDefault();
          return false;
        }

        if (message.length < 10) {
          alert("Please enter a message of at least 10 characters.");
          event.preventDefault();
          return false;
        }
      });
  });
</script>

<div id="contact" class="text-pretty">
  <hgroup class="flex flex-col justify-center items-center mb-10">
    <h1 class="text-5xl mb-9 font-medium text-center">Ways to Contact Me</h1>
    <p class="text-lg max-w-[50rem]">
      The best ways to contact me is through my social medias and the google
      form right below. This is the direct link to the same <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSe041kNaiiKghNRWl1fY-l4Od3RFemdjmPf0UQE8uBlzz5u0Q/viewform"
      >
        Google Form
      </a>
      if you prefer to fill it out there. For commissioning me, you may go to my
      <a href="https://vgen.co/hyceate">vgen</a>. Thank you!
    </p>
  </hgroup>

  <form
    id="inquiry-form"
    class="flex
  flex-col
  justify-center w-full"
    method="POST"
    action="https://docs.google.com/forms/d/e/1FAIpQLSe041kNaiiKghNRWl1fY-l4Od3RFemdjmPf0UQE8uBlzz5u0Q/formResponse"
    target="_blank"
  >
    <label for="name">Preferred Name <span aria-label="required">*</span></label
    >

    <input
      name="entry.2063991218"
      type="text"
      id="name"
      minlength="1"
      required
    />
    <label for="email">Email <span aria-label="required">*</span></label>

    <input
      name="entry.293503584"
      type="email"
      id="email"
      pattern="[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+"
      required
    />

    <label for="subject">Subject</label>
    <input name="entry.1871228663" type="text" id="subject" />
    <label for="message">Message <span aria-label="required">*</span></label>
    <textarea
      name="entry.1466471588"
      id="message"
      required
      rows="5"
      cols="5"
      minlength="10"
    ></textarea>
    <button
      type="submit"
      class="major-button mt-5 text-2xl font-semibold uppercase">Submit</button
    >
  </form>
</div>

<style>
  #contact a {
    text-decoration-line: underline;
  }
  #inquiry-form {
    margin: 1rem 0rem;
  }
  #inquiry-form label {
    padding: 0.2rem 0rem;
    font-weight: 500;
    font-size: 1.2rem;
    font-family: "Rubik", "Roboto", sans-serif;
    text-transform: uppercase;
  }
  #inquiry-form input,
  #inquiry-form textarea {
    border-radius: 5px;
    margin-bottom: 1rem;
    background-color: rgb(255, 249, 249);
    border: 2px solid rgb(109, 91, 91);
    padding: 0 5px;
  }
  input:invalid {
    border: 2px solid rgb(255, 132, 132) !important;
  }
  textarea:invalid {
    border: 2px solid rgb(255, 132, 132) !important;
  }
</style>
