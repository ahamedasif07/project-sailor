import React, { useEffect, useState } from "react";

const TopNavBar = () => {
  const [hideTopTitle, setHideTopTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideTopTitle(window.scrollY > 30); // hide after 30px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Top Title */}
      <h2
        className={`bg-[#2B2D42] py-[3px] text-gray-200 font-semibold text-center tracking-widest transition-all duration-300 ease-in-out ${
          hideTopTitle
            ? "opacity-0 translate-y-[-100%]"
            : "opacity-100 translate-y-0"
        }`}
      >
        Step into the Festive Season with Sailor
      </h2>

      {/* Bottom part of top nav */}
      <div className="hidden lg:block">
        <div className="flex justify-between items-center py-3 px-4 md:px-[100px] lg:px-[150px]">
          <h4 className="text-[14px] text-gray-700">Sailing Life</h4>
          <ul className="flex items-center gap-5">
            <li className="text-[14px] text-gray-700">log in</li>
            <li className="text-[14px] text-gray-700">about us</li>
            <li className="text-[14px] text-gray-700">my wishlist</li>
            <li className="text-[14px] text-gray-700">cart</li>
            <li className="text-[14px] text-gray-700">compare (0)</li>
          </ul>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          corrupti architecto vitae ea? Velit veniam quidem corrupti commodi
          maxime. Facere iste iure quibusdam quas maxime ducimus a consequuntur
          itaque vel et deserunt quod, ex, quos distinctio fuga voluptatum
          tenetur, ipsa est! Excepturi accusamus fuga cupiditate quis ut? Iure
          minima omnis similique neque doloremque maiores veritatis ipsa
          delectus quas. Porro placeat totam sapiente iste! Consequatur, facere
          illo ut ex deserunt dolores. Fuga laudantium nesciunt unde porro totam
          aliquid qui quod eligendi vitae! Libero sit qui magni minus amet hic
          molestias nulla quia nobis reprehenderit omnis alias architecto fugit,
          aperiam modi, quidem dolor dolore facere aspernatur placeat veritatis
          nihil deleniti? Accusantium earum dignissimos quidem maiores harum ad
          molestiae, ratione voluptatum dolore exercitationem quos natus laborum
          atque praesentium. Ducimus dicta saepe modi ad sed quae, quisquam
          magnam, incidunt tempora doloribus explicabo, error fuga cumque
          tenetur excepturi? Perspiciatis placeat nihil maxime deserunt alias
          corrupti qui sunt ducimus libero, enim provident natus voluptatem
          fugiat reiciendis aut aliquam fuga vero et excepturi rem error dolorem
          voluptate amet? Pariatur similique officiis placeat adipisci, quisquam
          minima? Magnam quae quis adipisci repellendus molestiae fugiat numquam
          corporis nulla. Perferendis minus, est nam sapiente inventore incidunt
          vel ab, velit doloribus iure laudantium voluptates architecto!
          Corrupti delectus dolorem alias labore ducimus culpa voluptatem et,
          dignissimos itaque aliquam vitae! Quis facilis maiores natus,
          blanditiis porro a aliquid possimus veritatis temporibus inventore,
          nesciunt aliquam numquam animi deserunt omnis itaque doloribus aut
          commodi accusamus suscipit iste. Nihil perferendis reiciendis, porro
          nostrum quos corporis, pariatur voluptate error laudantium soluta
          natus est accusantium assumenda saepe suscipit iste aspernatur
          obcaecati quisquam dicta totam eaque veniam necessitatibus. Similique
          quae ipsam nam aliquam dolor voluptatum pariatur ad earum quia
          perferendis? Corrupti qui, autem facilis quasi est atque cum eos aut!
          Iste voluptas deleniti necessitatibus earum repellendus, provident
          dolorem voluptate sit! Doloremque labore possimus eligendi est ea?
          Aliquam sapiente non hic, at odit culpa tempore esse minus. Animi
          inventore blanditiis at, aperiam dolorem sapiente iure suscipit
          tempora nobis incidunt consequuntur vel perspiciatis reprehenderit
          quis libero esse perferendis amet dignissimos eum veniam voluptate!
          Tempora impedit magni, corrupti eligendi fugiat sunt distinctio vitae.
          Nemo, pariatur qui saepe laboriosam magni molestiae fugiat eum
          voluptas accusantium libero doloremque quo nostrum eos ullam? Corrupti
          nostrum similique ad libero tenetur facere corporis aut eos placeat
          quaerat ipsam omnis ipsa, excepturi suscipit optio maxime ipsum id
          maiores voluptates, quia expedita quisquam rerum qui enim? Omnis atque
          voluptate consequuntur commodi sed quod! Ducimus necessitatibus, nihil
          veniam fugit, cupiditate ad aspernatur expedita maiores aperiam quos
          in sed porro vitae repudiandae dolores dicta dolor tenetur recusandae,
          placeat odit? Accusantium quibusdam, laborum odio, velit iure sunt
          soluta tenetur suscipit unde eius voluptates. Dolorem quibusdam
          impedit quae consequuntur sequi! Iure reprehenderit, quidem autem
          cupiditate sint molestias consequuntur ex itaque ducimus explicabo
          omnis quibusdam optio molestiae ut tenetur necessitatibus ab. Id atque
          nihil quibusdam error doloribus in alias ut odio quae unde. Delectus
          voluptates, minus aliquam architecto magnam accusantium quae nam
          distinctio ipsam expedita officiis atque et unde eveniet repellat
          earum totam aliquid ducimus ea veritatis officia error ab natus.
          Laudantium impedit assumenda possimus repellat a inventore natus,
          fugit perspiciatis praesentium fuga libero ad dicta nesciunt modi ea
          culpa delectus adipisci, dolor asperiores eveniet distinctio? Libero
          repudiandae sed molestiae fugiat officiis nobis, consectetur deleniti,
          odit harum accusantium cum reprehenderit distinctio! Quidem eveniet
          provident et repellat saepe laboriosam sapiente voluptates cum odio,
          porro aliquam non ullam reprehenderit suscipit? Vitae quis optio ex,
          dolorem repudiandae alias voluptatibus deserunt, aliquam hic omnis
          quas quod voluptatum, sed consequatur. Iusto laudantium quis eos
          nostrum sint labore saepe assumenda delectus id dolorum asperiores
          dolores praesentium, consectetur voluptates veritatis eum voluptatibus
          porro laboriosam est natus. Id ipsum omnis facere, soluta magni ut!
          Rem, amet veritatis. Laboriosam explicabo a deleniti expedita
          assumenda repudiandae iure dicta eos reprehenderit perferendis tempora
          dignissimos voluptate excepturi consequatur accusamus, rem quas,
          dolores quisquam inventore facilis? Distinctio velit, necessitatibus
          esse laboriosam neque, expedita doloribus porro, ducimus inventore
          iure harum. Repellat voluptatum enim iusto quae, adipisci vero nobis
          non fugit vel? Laborum magni quia excepturi temporibus dicta! Expedita
          ipsa veniam enim similique sapiente iusto delectus quod tempora
          consequuntur alias corrupti tempore, repellat numquam quos facere unde
          modi soluta. Nostrum reprehenderit modi facere repellat sed. Hic
          perferendis alias omnis nulla cum sapiente ratione qui voluptas
          asperiores explicabo molestias temporibus, officiis praesentium amet
          quis beatae recusandae optio ducimus odio aut, autem architecto
          perspiciatis iusto consectetur. Quo error quisquam doloribus debitis
          excepturi rem tempore ipsa laudantium esse reiciendis saepe mollitia
          veritatis quia, aperiam quis rerum dolorum ullam iusto dolor vero a
          suscipit distinctio voluptates voluptatum! Vero ratione, obcaecati
          corrupti officiis error facilis blanditiis, laborum id harum qui velit
          dolorem in amet natus laboriosam magnam eaque laudantium tempore
          provident. Nostrum, aspernatur eaque quae saepe voluptates autem
          explicabo, dolorum a quas repudiandae ipsam qui in. Ullam debitis
          ipsum maiores nihil. Tenetur, sunt ab. Exercitationem praesentium
          cupiditate qui dolor fugit quasi possimus, ullam debitis quo quam
          consequatur molestias error aspernatur voluptatum omnis molestiae
          asperiores iusto! Quo nemo iure iusto optio eveniet, eius deserunt.
          Reiciendis, eos eius repellendus dolor cumque fuga suscipit similique
          veritatis itaque corrupti, voluptas impedit magni unde, tenetur
          voluptates sint. Quos voluptate autem quam quod ab ad doloribus culpa
          praesentium. Pariatur, consectetur. Ducimus ab qui deserunt culpa illo
          molestiae ullam totam non, quis distinctio consectetur iste dolor
          aspernatur officiis pariatur est ipsum, soluta libero nesciunt nisi
          modi? Deleniti fugit beatae architecto sapiente doloremque quae
          nesciunt iste! Reprehenderit, nostrum quasi. Iste, quas quam labore
          illo aut, architecto dolores debitis et ipsam enim asperiores?
          Corrupti nam veniam qui laudantium commodi hic sequi ad velit non, sit
          voluptatibus. Pariatur blanditiis porro quos esse aliquid corporis
          quod, cum delectus? Quae, dolores, dolorem, consectetur ea illum
          exercitationem impedit culpa sed ab voluptate officiis nulla est minus
          sequi quo nam deserunt porro natus earum nihil omnis veniam nobis nisi
          sit! Eaque, voluptatum sit. Eum nesciunt, velit earum cupiditate quos
          praesentium accusantium harum! Amet iure, placeat debitis veritatis
          accusamus est aspernatur voluptates nemo incidunt neque sint
          consequatur possimus dolores deleniti ea blanditiis, corrupti
          reprehenderit quasi, repellendus explicabo perspiciatis unde animi?
        </p>
      </div>
    </div>
  );
};

export default TopNavBar;
