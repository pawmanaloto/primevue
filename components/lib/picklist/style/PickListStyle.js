import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-picklist {
    display: flex;
    gap: 1.125rem;
}

.p-picklist-controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
}

.p-picklist-list-container {
    flex: 1 1 50%;
}

.p-picklist .p-listbox {
    height: 100%;
}
`;

const classes = {
    root: 'p-picklist p-component',
    sourceControls: 'p-picklist-controls p-picklist-source-controls',
    sourceWrapper: 'p-picklist-list-container p-picklist-source-list-container',
    buttons: 'p-picklist-controls p-picklist-transfer-controls',
    targetWrapper: 'p-picklist-list-container p-picklist-target-list-container',
    targetControls: 'p-picklist-controls p-picklist-target-controls'
};

export default BaseStyle.extend({
    name: 'picklist',
    theme,
    classes
});
