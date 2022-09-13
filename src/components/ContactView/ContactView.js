import ContactList from "components/ContactList";
import Filter from "components/Filter";
import ContactForm from "components/ContactForm";


const ContactView = () => {
    return (
        <div>
        <ContactList/>
        <Filter/>
        <ContactForm/>
        </div>
    )
}


export default ContactView;