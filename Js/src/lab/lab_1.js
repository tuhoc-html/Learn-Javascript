const fullName = "Lucian Senna";
const birthYear = 2004;
const isStudent = false;

const today = new Date(); // Thời gian hiện tại (full)
const currentYear = today.getFullYear(); // Lấy năm hiện tại

const calculateAge = currentYear - birthYear;

isStudent = calculateAge > 18;

const info = `Tên: ${fullName}
Tuổi: ${calculateAge}
Sinh viên: ${isStudent ? "Đúng" : "Sai"}`;

console.log(info);
