import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollText } from 'lucide-react'

export const metadata: Metadata = {
    title: "Terms and Conditions | ManageIt",
    description: "Terms and conditions for using ManageIt - Your task management solution",
}

export default function TermsAndConditions() {
    return (
        <div className="container mx-auto px-4 py-16">
            <Card className="max-w-4xl mx-auto">
                <CardHeader className="text-center">
                    <div className="mx-auto bg-primary-foreground p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                        <ScrollText className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-4xl font-bold mb-2">Terms and Conditions</CardTitle>
                    <CardDescription>Last updated: {new Date().toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>1. Acceptance of Terms</AccordionTrigger>
                            <AccordionContent>
                                <p>By accessing or using ManageIt, you agree to be bound by these Terms and Conditions and our Privacy Policy.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>2. Description of Service</AccordionTrigger>
                            <AccordionContent>
                                <p>ManageIt is a task management and collaboration platform that allows users to create projects, assign tasks, and communicate with team members.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>3. User Accounts</AccordionTrigger>
                            <AccordionContent>
                                <p>You must create an account to use ManageIt. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>4. User Conduct</AccordionTrigger>
                            <AccordionContent>
                                <p>You agree not to use ManageIt for any unlawful purpose or in any way that could damage, disable, overburden, or impair our services.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>5. Intellectual Property</AccordionTrigger>
                            <AccordionContent>
                                <p>The content, features, and functionality of ManageIt are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>6. Termination</AccordionTrigger>
                            <AccordionContent>
                                <p>We reserve the right to terminate or suspend your account and access to ManageIt at our sole discretion, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users, us, or third parties, or for any other reason.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <AccordionTrigger>7. Disclaimer of Warranties</AccordionTrigger>
                            <AccordionContent>
                                <p>ManageIt is provided &#34;as is&#34; and &#34;as available&#34; without any warranties of any kind, either express or implied.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-8">
                            <AccordionTrigger>8. Limitation of Liability</AccordionTrigger>
                            <AccordionContent>
                                <p>In no event shall ManageIt, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-9">
                            <AccordionTrigger>9. Changes to Terms</AccordionTrigger>
                            <AccordionContent>
                                <p>We reserve the right to modify or replace these Terms at any time. Your continued use of ManageIt after any such changes constitutes your acceptance of the new Terms.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-10">
                            <AccordionTrigger>10. Contact Information</AccordionTrigger>
                            <AccordionContent>
                                <p>If you have any questions about these Terms, please contact us at terms@manageit.com.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </div>
    )
}

