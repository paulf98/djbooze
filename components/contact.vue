<template>
    <section class="py-16">
        <div class="container max-w-5xl mx-auto flex justify-between items-center gap-8">
            <div class="flex flex-col gap-16">
                <Heading text="Contact"></Heading>
                <p class="max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsum, eos explicabo
                    doloremque amet,
                    assumenda possimus molestiae est a culpa quod modi autem nulla reprehenderit dolorem. Expedita ullam
                    nemo quia!</p>
            </div>
            <form action="" class="w-full flex-grow">
                <div class="container flex flex-col items-stretch gap-4 max-w-xl mx-auto p-8 mb-8">
                    <div class="flex flex-col gap-2">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" class="p-2 rounded-md" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" class="p-2 rounded-md" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="6" class="p-2 rounded-md"></textarea>
                    </div>
                    <Button>Send</Button>
                </div>
            </form>
        </div>
    </section>
</template>