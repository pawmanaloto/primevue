import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-toggleswitch {
    display: inline-block;
    width: 2.5rem;
    height: 1.5rem;
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: ${dt('toggleswitch.border.radius')};
}

.p-toggleswitch-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 0 none;
    background: ${dt('toggleswitch.background')};
    transition: background ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('toggleswitch.border.radius')};
    outline-color: transparent;
}

.p-toggleswitch-slider:before {
    position: absolute;
    content: "";
    top: 50%;
    background: ${dt('toggleswitch.handle.background')};
    width: 1rem;
    height: 1rem;
    left: 0.25rem;
    margin-top: -0.5rem;
    border-radius: ${dt('toggleswitch.handle.border.radius')};
    transition: all ${dt('transition.duration')};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${dt('toggleswitch.checked.background')};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider:before {
    background: ${dt('toggleswitch.handle.checked.background')};
    left: 1.25rem;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${dt('toggleswitch.hover.background')};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider:before {
    background: ${dt('toggleswitch.handle.hover.background')};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${dt('toggleswitch.checked.hover.background')};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider:before {
    background: ${dt('toggleswitch.handle.checked.hover.background')};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    background: ${dt('toggleswitch.invalid.background')};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider:before {
    background: ${dt('toggleswitch.handle.invalid.background')};
}
`;

const inlineStyles = {
    root: { position: 'relative' }
};

const classes = {
    root: ({ instance, props }) => [
        'p-toggleswitch p-component',
        {
            'p-toggleswitch-checked': instance.checked,
            'p-disabled': props.disabled,
            'p-invalid': props.invalid
        }
    ],
    input: 'p-toggleswitch-input',
    slider: 'p-toggleswitch-slider'
};

export default BaseStyle.extend({
    name: 'toggleswitch',
    theme,
    classes,
    inlineStyles
});
