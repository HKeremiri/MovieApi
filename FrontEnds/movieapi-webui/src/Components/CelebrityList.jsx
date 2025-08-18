import React, { useState, useEffect, useMemo } from "react";
import CelebrityItem from "./CelebrityItem";
import Pagination from "./Pagination"; // varsa, yoksa kendi simple pagination'ını yaz

export default function CelebrityList({ celebrities: propCelebrities, setCelebrities }) {
    const [localCelebrities, setLocalCelebrities] = useState([]);
    const [sortOption, setSortOption] = useState("date_desc");
    const [currentPage, setCurrentPage] = useState(1);
    const [celebritiesPerPage, setCelebritiesPerPage] = useState(5);

    // Hangi listeyi kullanıyoruz: parent'tan geliyorsa propCelebrities, yoksa localCelebrities
    const celebrities = propCelebrities ?? localCelebrities ?? [];

    // Eğer parent veri göndermiyorsa, component kendi fetch'ini yapar.
    useEffect(() => {
        if (Array.isArray(propCelebrities)) return; // parent handle ediyor
        let mounted = true;
        fetch("https://localhost:7088/api/Casts")
            .then(res => {
                if (!res.ok) throw new Error("Network response not ok");
                return res.json();
            })
            .then(data => {
                if (!mounted) return;
                const arr = Array.isArray(data) ? data : [];
                setLocalCelebrities(arr);
                if (typeof setCelebrities === "function") {
                    // parent sağladıysa parent state'ini de güncelle
                    setCelebrities(arr);
                }
            })
            .catch(err => {
                console.error("Veri çekme hatası:", err);
                setLocalCelebrities([]);
            });
        return () => { mounted = false; };
    }, [propCelebrities, setCelebrities]);

    // Sıralama (useMemo ile optimize)
    const sortedCelebrities = useMemo(() => {
        const list = [...(celebrities || [])];
        list.sort((a, b) => {
            switch (sortOption) {
                case "date_asc":
                    return (new Date(a.birthDate || a.createdAt || 0)) - (new Date(b.birthDate || b.createdAt || 0));
                case "date_desc":
                    return (new Date(b.birthDate || b.createdAt || 0)) - (new Date(a.birthDate || a.createdAt || 0));
                case "name_asc":
                    return ((a.name ?? a.firstName ?? "")).localeCompare((b.name ?? b.firstName ?? ""));
                case "name_desc":
                    return ((b.name ?? b.firstName ?? "")).localeCompare((a.name ?? a.firstName ?? ""));
                default:
                    return 0;
            }
        });
        return list;
    }, [celebrities, sortOption]);

    // Sayfalama hesapları (isimler düzeltildi)
    const totalPages = Math.max(1, Math.ceil((sortedCelebrities.length || 0) / celebritiesPerPage));
    const indexOfLastCelebrity = currentPage * celebritiesPerPage;
    const indexOfFirstCelebrity = indexOfLastCelebrity - celebritiesPerPage;
    const currentCelebrities = sortedCelebrities.slice(indexOfFirstCelebrity, indexOfLastCelebrity);

    // Eğer dışarıdan celebrities değişirse sayfayı 1'e al
    useEffect(() => {
        setCurrentPage(1);
    }, [propCelebrities, localCelebrities, celebritiesPerPage, sortOption]);

    return (
        <div className="col-md-9 col-sm-12 col-xs-12">
            <div className="topbar-filter">
                <p className="pad-change">
                    Found <span>{(celebrities && celebrities.length) || 0} celebrities</span> in total
                </p>
                <label>Sort by:</label>
                <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                    <option value="date_desc">Release date Descending</option>
                    <option value="date_asc">Release date Ascending</option>
                    <option value="name_asc">Name A → Z</option>
                    <option value="name_desc">Name Z → A</option>
                </select>
            </div>

            <div className="row">
                {currentCelebrities.length === 0 ? (
                    <div className="col-md-12">
                        <p>No celebrities found.</p>
                    </div>
                ) : (
                    currentCelebrities.map((c) => (
                        <CelebrityItem key={c.castId ?? c.id ?? c._id ?? Math.random()} celebrity={c} />
                    ))
                )}
            </div>

            <div className="topbar-filter">
                <label>Per page:</label>
                <select value={celebritiesPerPage} onChange={(e) => { setCelebritiesPerPage(Number(e.target.value)); setCurrentPage(1); }}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>

                {/* Pagination bileşeni: önceki konuşmada vardı. Eğer farklı isimlendirdiyse uyarlayın */}
                <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    );
}
