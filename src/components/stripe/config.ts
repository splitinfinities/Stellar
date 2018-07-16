export const style = {
  iconStyle: 'solid',
  base: {
    iconColor: '#484849',
    color: '#484849',
    fontWeight: 500,
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '15px',
    fontSmoothing: 'antialiased',

    "::placeholder": {
      color: "#a3a3a4"
    },
    ":-webkit-autofill": {
      color: "#a3a3a4"
    }
  },
  invalid: {
    iconColor: '#f85e5a',
    color: '#f85e5a',

    '::placeholder': {
      color: '#fa8e8b',
    },
  },
};

export const classes = {
  focus: 'focused',
  empty: 'empty',
  invalid: 'invalid',
}
