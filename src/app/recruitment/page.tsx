"use client"
import { api } from "~/trpc/react";
import "./style.css"
import { useActionState, useEffect, useState, useTransition } from "react"
import { TRPCClientError } from "@trpc/client";


export default function RecruitmentPage() {
    const mut = api.register.create.useMutation()
    type trpcError = typeof mut.error;
    const [error, setError] = useState<null | string[]>(null)

    const handleSubmit = async (formData: FormData) => {
        const registerData = {
            email: formData.get("email")!.toString(),
            name: formData.get("name")!.toString(),
            reason: formData.get("reason")!.toString()
        }

            mut.mutate(registerData);

    }

    useEffect(() => {
        if(mut.isError) {
            let fields: string[] = [];
            if(mut.error.data?.zodError) {
                fields = Object.keys(mut.error.data?.zodError?.fieldErrors);
            }

            setError(fields)
        }
    }, [mut.error])

    return (
        <main>
            <h2 className="recruitTitle">Join Raven's Oath!</h2>
            <form action={handleSubmit} id="register">
                <input placeholder="Your Name" name="name" required disabled={mut.isPending} />
                {error?.includes("name") && <li className="inputError">invalid name</li>}
                <input placeholder="Your Email" name="email" required disabled={mut.isPending} />
                {error?.includes("email") && <li className="inputError">invalid email</li>}
                <textarea placeholder="Tell us why you want to join..." name="reason" required disabled={mut.isPending} />
                {error?.includes("reason") && <li className="inputError">invalid reason</li>}
                <button>Submit</button>
            </form>
        </main>
    )
}