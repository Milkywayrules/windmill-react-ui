export default {
  // Input
  input: {
    base:
      'block w-full text-sm dark:border-gray-600 focus:outline-none dark:text-gray-300 form-input',
    active:
      'focus:border-purple-400 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700',
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
    valid: 'border-green-600 dark:bg-gray-700 focus:border-green-400 focus:shadow-outline-green',
    invalid:
      'border-red-600 dark:text-gray-300 dark:bg-gray-700 focus:border-red-400 focus:shadow-outline-red',
    radio:
      'text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray',
    checkbox:
      'text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray',
  },
  // HelperText
  helperText: {
    base: 'text-xs',
    valid: 'text-green-600 dark:text-green-400',
    invalid: 'text-red-600 dark:text-red-400',
  },
  // Card
  card: {
    base: 'min-w-0 rounded-lg shadow-xs',
    default: 'bg-white dark:bg-gray-800',
  },
  cardBody: {
    base: 'p-4',
  },
  // Button
  button: {
    base:
      'inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none',
    block: 'w-full',
    size: {
      larger: 'px-10 py-4 rounded-lg',
      large: 'px-5 py-3 rounded-lg',
      regular: 'px-4 py-2 rounded-lg text-sm',
      small: 'px-3 py-1 rounded-md text-sm',
      icon: 'px-2 py-2 rounded-lg',
    },
    primary: {
      base: 'text-white bg-purple-600 border border-transparent',
      active: 'active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    outline: {
      base: 'text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none',
      active:
        'active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:shadow-outline-gray',
      disabled: 'opacity-50 cursor-not-allowed bg-gray-300',
    },
    link: {
      base: 'text-gray-600 dark:text-gray-400 focus:outline-none',
      active: 'hover:bg-gray-100 focus:shadow-outline-gray',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    dropdownItem: {
      base:
        'inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200',
    },
  },
}