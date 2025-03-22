'use client'

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function EquipmentsFilter({ categories }: { categories: any[] }) {
    const categoryParamName = 'category';
    const queryParamName = 'query';

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleCategoryChange = (value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set(categoryParamName, value);
        } else {
            params.delete(categoryParamName);
        }
        replace(`${pathname}?${params.toString()}`);
    }

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set(queryParamName, term);
        } else {
            params.delete(queryParamName);
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="mt-4">
            <div className="flex flex-col gap-6">
                <ToggleGroup className='hidden md:flex justify-start md:gap-4' size="default" type="single" defaultValue={searchParams.get(categoryParamName)?.toString() || '0'} onValueChange={(e) => { handleCategoryChange(e); }}>
                    <ToggleGroupItem value="0" aria-label="Toutes les catégories" className='bg-white rounded-full'>
                        Toutes les catégories
                    </ToggleGroupItem>
                    {categories.map((category) => (
                        <ToggleGroupItem key={category.id} value={category.id.toString()} aria-label={category.name} className='bg-white rounded-full'>
                            {category.name}
                        </ToggleGroupItem>
                    ))}
                </ToggleGroup>

                <div className='gap-2 block md:hidden'>
                    <Select defaultValue={searchParams.get(categoryParamName)?.toString()} onValueChange={(e) => { handleCategoryChange(e); }}>
                        <SelectTrigger>
                            <SelectValue placeholder="Choisissez une Catégorie" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="0" onClick={(e) => e.stopPropagation()}>Toutes les catégories</SelectItem>
                            {categories.map((category) => (
                                <SelectItem key={category.id} value={category.id.toString()} onClick={(e) => e.stopPropagation()}>{category.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <Input
                    className='bg-white'
                    defaultValue={searchParams.get(queryParamName)?.toString()}
                    onChange={(e) => { handleSearch(e.target.value); }}
                    placeholder="Rechercher ..." />
            </div>
        </div>
    );
}
