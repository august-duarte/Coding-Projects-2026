const grid = document.getElementById("grid");
const info = document.getElementById("info");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("close-modal");

function openModal() {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");

  if (document.activeElement) {
    document.activeElement.blur();
  }
}

closeModalButton.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

async function loadItems() {
  try {
    const response = await fetch("./items.json");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const items = await response.json();

    for (const item of items) {
      const button = document.createElement("button");
      button.className = "card border-none bg-transparent p-0 cursor-pointer text-center focus:outline-none";

      button.innerHTML = `
        <img
          src="${item.image}"
          alt="${item.name}"
          class="block w-full h-[220px] object-contain rounded-2xl mb-[10px] bg-white transition duration-200 ease-in-out"
        >
        <span class="inline-block font-semibold text-black bg-white px-4 py-1 rounded-full shadow-sm">
          ${item.name}
        </span>
      `;

      const img = button.querySelector("img");
      img.style.objectPosition = item.position || "center top";

      button.addEventListener("click", async () => {
        try {
          const characterResponse = await fetch(item.file);

          if (!characterResponse.ok) {
            throw new Error(`HTTP error: ${characterResponse.status}`);
          }

          const character = await characterResponse.json();

          info.innerHTML = `
            <h2 class="mt-0 mb-2 text-3xl font-bold">${character.name}</h2>
            <h3 class="mt-0 mb-4 text-xl font-semibold text-gray-500">${character.title}</h3>
            <p>${character.description.replace(/\n/g, "<br><br>")}</p>
          `;

          openModal();
        } catch (error) {
          info.innerHTML = `<p>Could not load character information.</p>`;
          openModal();
          console.error(error);
        }
      });

      grid.appendChild(button);
    }
  } catch (error) {
    grid.innerHTML = "<p>Could not load characters.</p>";
    console.error(error);
  }
}

loadItems();