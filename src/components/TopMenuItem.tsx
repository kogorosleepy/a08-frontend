import Link from 'next/link';

export default function TopMenuItem({title, pageRef} : {title:string, pageRef:string}){
    return(
        <Link className="w-30 text-center mt-auto mb-auto text-[20px] text-white font-bold" href={pageRef}>{title}</Link>
    );
}