export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = state => {
  const filter = getFilter(state);
  const contacts = getContacts(state);
  return contacts
    .filter(contact => {
      return contact.name.includes(filter);
    })
    .sort((a, b) => a.name.localeCompare(b.name));
};
