'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from '@/components/ui/dropdown-menu';

export default function Workroom() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState<string>('');

    const handleImageSelect = (image: string) => {
        setSelectedImage(image);
    };

    const handleGenerate = () => {
        // Handle generate action
        console.log('Generate clicked with input:', inputValue);
    };

    return (
        <div>


            <div className="flex justify-between p-5">
                <div className="flex-1 mx-2 p-0 ">
                    <Card className="rounded-2xl shadow-none">
                        <CardHeader>
                            <CardTitle className="text-center">Inpute Image</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <img
                                    className="w-full h-64 object-cover"
                                    src={selectedImage || 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'}
                                    alt="Selected Image"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        if (e.target.files && e.target.files[0]) {
                                            const reader = new FileReader();
                                            reader.onload = (event) => {
                                                if (event.target && typeof event.target.result === 'string') {
                                                    setSelectedImage(event.target.result);
                                                }
                                            };
                                            reader.readAsDataURL(e.target.files[0]);
                                        }
                                    }}
                                    style={{ display: 'none' }}
                                    id="upload-image-input"
                                />
                                <Button variant="outline" onClick={() => document.getElementById('upload-image-input')?.click()}>
                                    Upload Image
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex-1 mx-2 p-0 ">
                    <Card className="rounded-2xl shadow-none">
                        <CardHeader>
                            <CardTitle className="text-center">Generated Image</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <img
                                    className="w-full h-64 object-cover"
                                    src={selectedImage || 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'}
                                    alt="Selected Image"
                                />
                                <Button variant="outline" onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = selectedImage || 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';
                                    link.download = 'image.png';
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }}>
                                    Download Image
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <section className="flex-1 p-4 lg:p-8">
                
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-center">Prompt</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex space-x-4">
                            <Input
                                type="text"
                                placeholder="Enter your input"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="flex-1"
                            />
                            <Button onClick={handleGenerate} variant="outline">
                                Generate
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </section>

        </div>
    );
}
