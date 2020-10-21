export const parseServicePage = (pages) => {
    const headerSectionId       = "5f9040ca5d24f1001e75ee71";
    const teachingProgramming   = "5f904a755d24f1001e75eeb5";
    const developmentProject    = "5f904b025d24f1001e75eec3";
    const generalIt             = "5f904bd15d24f1001e75eeed";

    const headerCard = pages.find((x) => x.id === headerSectionId);
    const services = pages.filter((x) => {
        return (x.id === teachingProgramming ||
        x.id === developmentProject ||
        x.id === generalIt);
    });
    return {
        headerCard,
        services
    }
}