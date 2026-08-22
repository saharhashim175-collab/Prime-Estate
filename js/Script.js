// =========================
// Prime Estate JavaScript
// =========================

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // Property Search
    // =========================

    const searchButton = document.querySelector("#searchBtn");
    const propertyStatus = document.querySelector("#propertyStatus");
    const propertyType = document.querySelector("#propertyType");
    const propertyLocation = document.querySelector("#propertyLocation");
    const propertyCards = document.querySelectorAll(".property-card");

    if (searchButton) {

        searchButton.addEventListener("click", function () {

            const status = propertyStatus.value;
            const type = propertyType.value.toLowerCase().trim();
            const location = propertyLocation.value
                .toLowerCase()
                .trim();

            let found = false;

            propertyCards.forEach(function (card) {

                const cardStatus = card.dataset.status;
                const cardType = card.dataset.type.toLowerCase().trim();
                const cardLocation = card.dataset.location;

                const statusMatch =
                    status === "" || status === cardStatus;

                const typeMatch =
                    type === "" || type === cardType;

                const locationMatch =
                    location === "" ||
                    cardLocation.includes(location);

                if (statusMatch && typeMatch && locationMatch) {

                    card.style.display = "block";
                    found = true;

                } else {

                    card.style.display = "none";

                }

            });

            const propertiesSection =
                document.querySelector("#properties");

            if (propertiesSection) {
                propertiesSection.scrollIntoView({
                    behavior: "smooth"
                });
            }

            if (!found) {
                alert("No properties found.");
            }

        });

    }


    // =========================
    // Property Details Modal
    // =========================

    const modal = document.querySelector("#propertyModal");

    if (modal) {

        const modalImage =
            document.querySelector("#modalImage");

        const modalTitle =
            document.querySelector("#modalTitle");

        const modalLocation =
            document.querySelector("#modalLocation");

        const modalDetails =
            document.querySelector("#modalDetails");

        const modalPrice =
            document.querySelector("#modalPrice");

        const modalStatus =
            document.querySelector("#modalStatus");

        const closeButton =
            document.querySelector(".modal-close");


        // Open Property Details

        propertyCards.forEach(function (card) {

            const detailsButton =
                card.querySelector(".property-btn");

            if (!detailsButton) {
                return;
            }

            detailsButton.addEventListener("click", function (event) {

                event.preventDefault();

                const image =
                    card.querySelector("img").src;

                const title =
                    card.querySelector("h3").textContent;

                const paragraphs =
                    card.querySelectorAll(".property-info p");

                const price =
                    card.querySelector(".property-price").textContent.trim();

                const location =
                    paragraphs[0].textContent;

                const details =
                    paragraphs[1].textContent;

                const status =
                    card.dataset.status;


                modalImage.src = image;
                modalTitle.textContent = title;
                modalLocation.textContent = location;
                modalDetails.textContent = details;
                modalPrice.textContent = price;


                if (status === "buy") {

                    modalStatus.textContent =
                        "Status: For Sale";

                } else {

                    modalStatus.textContent =
                        "Status: For Rent";

                }


                modal.style.display = "flex";

            });

        });


        // =========================
        // Close Modal
        // =========================

        if (closeButton) {

            closeButton.addEventListener("click", function () {

                modal.style.display = "none";

            });

        }


        // =========================
        // Close Modal by Clicking Outside
        // =========================

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {

                modal.style.display = "none";

            }

        });

    }

});

   
