import dotenv from "dotenv";
import mongoose from "mongoose";
import Employee from "../src/models/Employee.js";
import dns from "dns";

dotenv.config();


dns.setServers(["8.8.8.8", "1.1.1.1"]);

const employees = [
    {
        name: "Rahul Sharma",
        email: "rahul.sharma@nexa.ai",
        role: "Senior Software Engineer",
        department: "Engineering",
        location: "Bangalore, India",
        experience: "5 years",
        status: "Active",
        skills: ["React", "Node.js", "MongoDB", "JavaScript"],
        joined: "2021-06",
    },
    {
        name: "Priya Singh",
        email: "priya.singh@nexa.ai",
        role: "Product Designer",
        department: "Design",
        location: "Mumbai, India",
        experience: "4 years",
        status: "Active",
        skills: ["Figma", "UI/UX", "Prototyping"],
        joined: "2022-03",
    },
    {
        name: "Arjun Verma",
        email: "arjun.verma@nexa.ai",
        role: "Backend Developer",
        department: "Engineering",
        location: "Hyderabad, India",
        experience: "3 years",
        status: "Active",
        skills: ["Node.js", "Express", "MongoDB", "REST API"],
        joined: "2023-01",
    },
    {
        name: "Ananya Gupta",
        email: "ananya.gupta@nexa.ai",
        role: "Marketing Manager",
        department: "Marketing",
        location: "Delhi, India",
        experience: "6 years",
        status: "Active",
        skills: ["SEO", "Marketing", "Analytics", "Content"],
        joined: "2020-08",
    },
    {
        name: "Vikash Kumar",
        email: "vikash.kumar@nexa.ai",
        role: "HR Business Partner",
        department: "HR",
        location: "Delhi, India",
        experience: "7 years",
        status: "Active",
        skills: ["Recruitment", "Employee Relations", "HR Strategy"],
        joined: "2019-04",
    },
    {
        name: "Sneha Patel",
        email: "sneha.patel@nexa.ai",
        role: "Frontend Developer",
        department: "Engineering",
        location: "Pune, India",
        experience: "2 years",
        status: "Active",
        skills: ["React", "JavaScript", "HTML", "CSS"],
        joined: "2024-02",
    },
    {
        name: "Aditya Mehta",
        email: "aditya.mehta@nexa.ai",
        role: "Sales Executive",
        department: "Sales",
        location: "Mumbai, India",
        experience: "3 years",
        status: "Active",
        skills: ["Sales", "CRM", "Communication"],
        joined: "2023-05",
    },
    {
        name: "Neha Kapoor",
        email: "neha.kapoor@nexa.ai",
        role: "Financial Analyst",
        department: "Finance",
        location: "Delhi, India",
        experience: "4 years",
        status: "Active",
        skills: ["Financial Analysis", "Excel", "Reporting"],
        joined: "2022-07",
    },
    {
        name: "Karan Malhotra",
        email: "karan.malhotra@nexa.ai",
        role: "DevOps Engineer",
        department: "Engineering",
        location: "Bangalore, India",
        experience: "5 years",
        status: "Active",
        skills: ["Docker", "AWS", "CI/CD", "Linux"],
        joined: "2021-10",
    },
    {
        name: "Riya Joshi",
        email: "riya.joshi@nexa.ai",
        role: "Content Strategist",
        department: "Marketing",
        location: "Pune, India",
        experience: "3 years",
        status: "Active",
        skills: ["Content Strategy", "SEO", "Copywriting"],
        joined: "2023-09",
    },
    {
        name: "Mohit Agarwal",
        email: "mohit.agarwal@nexa.ai",
        role: "Sales Manager",
        department: "Sales",
        location: "Delhi, India",
        experience: "8 years",
        status: "Active",
        skills: ["Sales Management", "CRM", "Leadership"],
        joined: "2018-11",
    },
    {
        name: "Simran Kaur",
        email: "simran.kaur@nexa.ai",
        role: "UX Researcher",
        department: "Design",
        location: "Chandigarh, India",
        experience: "3 years",
        status: "Away",
        skills: ["User Research", "Usability Testing", "Figma"],
        joined: "2023-02",
    },
    {
        name: "Kunal Kapoor",
        email: "kunal.kapoor@nexa.ai",
        role: "Mechanical Engineer",
        department: "Manufacturing",
        location: "Gurgaon, India",
        experience: "4 years",
        status: "Active",
        skills: ["Mechanical Design", "CAD", "Manufacturing"],
        joined: "2022-09",
    },
];

const seedEmployees = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connected");

        await Employee.deleteMany();

        await Employee.insertMany(employees);

        console.log(`${employees.length} employees inserted successfully`);

        await mongoose.disconnect();

        process.exit(0);
    } catch (error) {
        console.error("Seeding failed:", error.message);

        await mongoose.disconnect();

        process.exit(1);
    }
};

seedEmployees();