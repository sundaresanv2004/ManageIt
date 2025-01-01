import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield } from 'lucide-react'

export const metadata: Metadata = {
    title: "Privacy Policy | ManageIt",
    description: "Privacy policy for ManageIt - Protecting your data and privacy",
}

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-16">
            <Card className="max-w-4xl mx-auto">
                <CardHeader className="text-center">
                    <div className="mx-auto bg-primary-foreground p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                        <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-4xl font-bold mb-2">Privacy Policy</CardTitle>
                    <CardDescription>Last updated: {new Date().toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>1. Information We Collect</AccordionTrigger>
                            <AccordionContent>
                                <p>When you use ManageIt with Google Authentication, we collect the following information:</p>
                                <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>Your email address</li>
                                    <li>Your name</li>
                                    <li>Your profile picture</li>
                                </ul>
                                <p className="mt-2">We only collect this information to provide and improve our services to you.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>2. How We Use Your Information</AccordionTrigger>
                            <AccordionContent>
                                <p>We use the information we collect to:</p>
                                <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>Provide, maintain, and improve our services</li>
                                    <li>Personalize your experience on ManageIt</li>
                                    <li>Communicate with you about our services</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>3. Data Security</AccordionTrigger>
                            <AccordionContent>
                                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>4. Third-Party Services</AccordionTrigger>
                            <AccordionContent>
                                <p>We use Google Authentication for user authentication. Please refer to Google&#39;s Privacy Policy for more information on how they handle your data.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>5. Your Rights</AccordionTrigger>
                            <AccordionContent>
                                <p>You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at privacy@manageit.com.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>6. Changes to This Policy</AccordionTrigger>
                            <AccordionContent>
                                <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <AccordionTrigger>7. Contact Us</AccordionTrigger>
                            <AccordionContent>
                                <p>If you have any questions about this privacy policy, please contact us at privacy@manageit.com.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </div>
    )
}

