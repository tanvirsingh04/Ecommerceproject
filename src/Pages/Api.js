export const registerUser = async (data) => {
try {
const response = await fetch("http://localhost:5500/users" , {
method: "POST" ,
headers: {
"Content-Type": "application/json" ,
},
body: JSON.stringify(data),
});

return await response.json();
} catch (error) {
throw error;
}
};