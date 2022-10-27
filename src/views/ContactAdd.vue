<template>
    <div
        v-if="contact"
        class="page"
    >
        <h4>Thêm Liên hệ</h4>
        <ContactForm
            :contact="contact"
            @submit:contact="onAddContact"
        />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';
import { contactService } from '@/services/contact.service';
export default {
    components: {
        ContactForm,
    },
    
    data() {
        return {
            contact: null,
            message: '',
        };
    },
    methods: {
        async onAddContact(contact) {
            try {
                await contactService.create(contact);
                this.message = 'Liên hệ được thêm thành công.';
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.message = '';
        this.contact = {name: '', email: '', address: '', phone: '', favorite: '', };
    },
};
</script>