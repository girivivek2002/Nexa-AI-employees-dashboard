import { useCallback, useEffect, useState } from "react";

import {
    getEmployees,
    createEmployee,
    deleteEmployee as deleteEmployeeApi,
} from "../services/employeeService";

export default function useEmployees() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadEmployees = useCallback(async () => {
        try {
            setLoading(true);

            const data = await getEmployees();

            setEmployees(
                Array.isArray(data) ? data : []
            );
        } catch (error) {
            console.error(
                "Failed to load employees:",
                error
            );

            setEmployees([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadEmployees();
    }, [loadEmployees]);

    const addEmployee = useCallback(
        async (employee) => {
            try {
                const newEmployee =
                    await createEmployee(employee);

                setEmployees(
                    (currentEmployees) => [
                        newEmployee,
                        ...currentEmployees,
                    ]
                );

                return newEmployee;
            } catch (error) {
                console.error(
                    "Failed to create employee:",
                    error
                );

                throw error;
            }
        },
        []
    );

    const deleteEmployee = useCallback(
        async (id) => {
            try {
                await deleteEmployeeApi(id);

                setEmployees(
                    (currentEmployees) =>
                        currentEmployees.filter(
                            (employee) =>
                                employee._id !== id &&
                                employee.id !== id
                        )
                );
            } catch (error) {
                console.error(
                    "Failed to delete employee:",
                    error
                );

                throw error;
            }
        },
        []
    );

    return {
        employees,
        loading,
        addEmployee,
        deleteEmployee,
        reloadEmployees: loadEmployees,
    };
}