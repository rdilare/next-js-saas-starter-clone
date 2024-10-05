'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from '@/components/ui/dropdown-menu';

export function Workroom() {
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
        <section className="flex-1 p-4 lg:p-8">
            <h1 className="text-lg lg:text-2xl font-medium mb-6">Workroom</h1>
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Image Selection</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">Select Image</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem onClick={() => handleImageSelect('/image1.png')}>Image 1</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => handleImageSelect('/image2.png')}>Image 2</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => handleImageSelect('/image3.png')}>Image 3</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <div className="flex space-x-4 mt-4 sm:mt-0">
                                <Avatar>
                                    <AvatarImage
                                        src={selectedImage || '/placeholder.svg?height=32&width=32'}
                                        alt="Selected Image"
                                    />
                                    <AvatarFallback>?</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage
                                        src="/placeholder.svg?height=32&width=32"
                                        alt="Placeholder Image"
                                    />
                                    <AvatarFallback>?</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Input and Generate</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <Input
                            type="text"
                            placeholder="Enter your input"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <Button onClick={handleGenerate} variant="outline">
                            Generate
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}
