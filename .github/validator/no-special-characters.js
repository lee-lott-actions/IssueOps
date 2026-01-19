export default async (field) => {
//export async function validate(fieldValue) {
  // Define the regex for invalid characters
  const invalidRegex = /[\$"\\`#*\&%'/]/;
  
  // Check if the field value is a string and contains invalid characters
  if (typeof field === 'string' && invalidRegex.test(field)) {
    return `Field contains disallowed special characters. Please remove them.`;
  }

  return 'success';
}
