import "./PageStyles.css";
import "./DocumentPage.css";
import React, { useState } from 'react';
import BackButton from '../components/BackButton';

function DocumentPage() {
  const [selectedEssay, setSelectedEssay] = useState(null);

  const essays = [
    { id: 1, 
    title: "Maroon",
    content: (
      <div>
        <br/>
        <br/>
        <div style={{ fontSize: '1.8rem', fontStyle: 'italic', marginBottom: '0.5rem' }}>
          <em>Maroon</em> by Liam Kernan
        </div>
        <div style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
          an essay on imperfection.
        </div>
        <div>The man in the maroon suit sits in the corner of the garden, quietly typing on his phone. His posture is slouched; his left hand holds a cigarette, which he shakily lifts to his lips every 10 seconds or so. Something about his slight tremble reminded me of a prayer; repeated, ritualistic, desperate. We exchange a few glances as I sit on the bench diagonal to him, notebook & pen in hand. I'm working up a drawing of the jumbled mess of a tree in front of me, scraping for something in the space to take my attention. I've been sitting on this bench for close to an hour now, in the same position as when I came to find inspiration in the morning earlier this week. I've tried to pull inspiration from what feels like everything here: the branches, the pathway, the giant concrete building acting as a barrier for this secluded space. The beauty of the sunset is long gone, and the scenery around me begins to lose its definition, as the nighttime brings an air of emptiness.</div>
        <br/>
        <div>With this, I begin to second-guess myself; after two trips to this location, I can't find a place of inspiration, can't find something to make a drawn-out and pretentious metaphor about. My doubt is creeping in; I need to start writing, and yet I have nothing to write about. I'm an artist after all; this should be easy for me. You got into the school you dreamed of, you have all your ambitions of leading an industry & moving people, and you can't even pull a focal point out of a bountiful garden? You've been writing essays for what, 10 years, and you can't even get a sentence in?</div>
        <br/>
        <div>Pssssss. I jolt back to reality, glancing across the garden; the man in the maroon suit is standing now, phone still in hand, but no cigarette. I look down to the beaten path, being swallowed by the shrubbery around it, and see the spent cigarette lying there. Lodged between two bricks and half its original size, its two-tone color palette is deforming to a single sickly orange, the color slowly growing darker as the rain-slicked surface drowns it. In this moment the smell hits me; easily recognizable as my grandparents' living room, the clubs & venues of Broad St, the lingering odor of my best friend's car. There's comfort to these memories, but in this moment the smell is disorienting; perhaps because of the harsh contrast it offers to the unobtrusive smell of growing foliage and damp soil.</div>
        <br/>
        <div>As I let my senses acclimate, I began to feel some resentment. Clearly it provided the man in the maroon suit comfort, but I saw it for what it was. Worthless litter, this carcinogen on the ground, destroying the health of anyone who used it. And now it lies here, an eyesore in an otherwise pristine pocket of nature. But by the time I'm finished with these thoughts and look up again, the man in the maroon suit is gone. I will likely never see him again, or if I do, I won't recognize his face. My hypocrisy hit me; why am I criticizing him and his habit when I know nothing else about him, when I couldn't even tell you his name? I'm judging a person's whole character off a single action, while I am imperfect in the same way as him. I have vices of my own that are unique to his but just as destructive and harmful; I bite my nails until they bleed. I'm competitive to a fault. I doubt people's intentions.</div>
        <br/>
        <div>Looking back to the scenery, I recapture the connection to nature I felt when I first got here; the smell of the cigarettes was fading, and it lay almost invisible in the weeds, barely taking my eyes for a second from the scenery. As I laid eyes on it, I felt the same tension bubbling up; but I tried looking at it from a different perspective. It only existed when I looked for it, and even then, I began to feel a sense of sympathy for its presence in the space. It's becoming part of the landscape, not through belonging, but through the garden's quiet acceptance of what is. My notebook filled with anxious drawings and half-finished sentences sits beside me; equally imperfect, equally present, equally acceptable. The cigarette made the scenery imperfect, but it took nothing away from it. It only reshaped it slightly; it added a layer of honest complexity.</div>
        <br/>
        <div>Far too often, we let our flaws & our insecurities about them define us. A very widely known yet infinitely intriguing moral principle to me can be found in the Bible, which is that we are all sinners and therefore imperfect in different regards & for different reasons (the apostate Paul proclaims, "For everyone has sinned; we all fall short of God's glorious standard"). However, in the eyes of God, we will all be viewed equally as his children. Outside of the religious context, I see the broader social idea of this as the idea of accepting your flaws and understanding they don't negate your worth. An overlapping moral principle from a different culture can be found in Wabi-Sabi, the Japanese philosophy of finding beauty in imperfection & impermanence. Specifically the art of Kintsugi is a great example of this, a process in which followers would repair broken pottery and furniture by filling the cracks with gold to highlight the imperfection. The resonance of this idea between multiple traditions like Christianity and Wabi-Sabi shows how essential this acceptance has proven to be to our humanity.</div>
        <br/>
        <div>Not being able to accept your flaws is a human trait, as nobody will recognize your shortcomings and weaknesses like you will. But what's most important is that we take those "weaknesses" and accept them fully; not that we celebrate or surrender to them, but that we live in acknowledgement of them. Much like Kintsugi, we can fill our cracks with gold; that is, to use the opportunity of failure to create something beautiful. Because the cigarette didn't erase the garden's quiet beauty; it complicated it, and that complication felt honest. In a weird way, it showed me how to accept my own imperfections, the things that complicate me. Now I'm writing, not about the tree I tried to force into meaning, not about the chapel ceiling or the perfect sunset. I'm writing about a soggy cigarette, and somehow, it's the most honest thing I've written in months. My imperfection found its subject in imperfection; I found peace in imperfection.</div>
      </div>
    )
    },
    { id: 2, 
    title: "The Beauty of the Creative Process", 
    content: (
      <div>
        <br/>
        <br/>
        <div style={{ fontSize: '1.8rem', fontStyle: 'italic', marginBottom: '0.5rem' }}>
          <em>The Beauty of the Creative Process</em> by Liam Kernan
        </div>
        <div style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
          an essay on creative thought.
        </div>
        <div>"The artist is extremely lucky who is presented with the worst ordeal which will not kill him.</div>
        <div>At that point, he's in business."</div>
        <br/>
        <div>Perhaps John Berryman was incorrect.</div>
        <br/>
        <div>His 1964 collection "The Dream Songs" is his magnum opus of sorts; it was recommended to me by an art teacher who I have great respect for, and it's given me great contemplation on the creative process. It's a sprawling collection of 385 poems divided into 2 sections: 77 Dream Songs, and His Toy, His Dream, His Rest. Both follow the character of Henry, a middle-aged white American that Berryman insisted wasn't him.</div>
        <br/>
        <div>In 77 Dream Songs, Henry is dealing with depression but maintains a clear & holistic analysis of his circumstances with a clinical distance. These poems are easily consumable and tolerate some hope for Henry. But in the second volume, His Toy, His Dream, His Rest, Henry's trajectory takes a dark turn; the level-headedness and clarity evaporate as Henry's tone shifts into a flatter and disturbed version of his earlier self. The rawness and depravity in these latter pieces make it clear that Henry is no longer the narrator; rather Berryman wearing his character as a mask. The poems became what he called his business, but they couldn't save him.</div>
        <br/>
        <div>Berryman drained his soul to pour the distilled and well-contemplated tonality of 77 Dream Songs, leaving the second half a hollowed-out man professing agony, insisting on fiction while everyone could see the truth.</div>
        <br/>
        <div>Perhaps it's fair to say his business was the main instrument of his death; just 2 years after writing about the "worst ordeal that wouldn't kill him", Berryman jumped off the Washington Avenue Bridge, into the embrace of the frozen Mississippi River.</div>
        <br/>
        <br/>
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <img src={`${process.env.PUBLIC_URL}/art/3art.webp`} alt="Art piece 3" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <br/>
        <br/>
        <div>"Writing is easy. You just open a vein and bleed."</div>
        <br/>
        <div>No one knows who said this first; the credit has been attributed to Hemingway, Red Smith, Paul Gallico, and Nietzsche. I myself am uncertain in what piece I heard this first, but the uncertainty feels fitting here; the universalness of this epiphany shows its nativeness to art & artists.</div>
        <br/>
        <div>The physical toll speaks much of the same truth. James Joyce wrote the final pages of Finnegans Wake nearly blind, eyes leaking pus, dictating his "vision" to Samuel Beckett. Kerouac typed On the Road on a 120-foot scroll, fueled by amphetamines to distract from his fingers cramping into claws; after all, stopping to change paper might break the flow. Kanye West went through numerous & grotesquely public manic episodes, spewing a storm of hatred and anger before releasing his most cogent & philosophical work, like an inverted hurricane. We document these destructions like trivia, except they're not fun little supplements to the work; they ARE the work. But as Shield said,</div>
        <br/>
        <br/>
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <img src={`${process.env.PUBLIC_URL}/art/7art.webp`} alt="Art piece 7" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <br/>
        <br/>
        <div>"I'm not interested in myself per se. I'm interested in myself as a theme carrier, as a host."</div>
        <br/>
        <div>A host is nothing more than a container. Medically it is a vessel for a parasite; contemporarily it's a supplier; technologically it's a means of communication. The body's blood & organs are drained, a dinner party is catered for, and data center resources are exerted to provide a website.</div>
        <br/>
        <div>The self is the container; the host expends themselves to provide for the "users". Good Old Neon shows Neal as an exhibition of symptoms. In Shields' case, we the audience are the user.</div>
        <br/>
        <div>Creators serve as hosts, bleeding personal struggles and willpower into a body of work for us to consume. Shields understood this. He doesn't have experiences anymore, rather becoming a platform for experiences to be diffused. He became a medium to make trauma consumable.</div>
        <br/>
        <br/>
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <img src={`${process.env.PUBLIC_URL}/art/9art.webp`} alt="Art piece 9" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <br/>
        <br/>
        <div>"I need say nothing, only exhibit"</div>
        <br/>
        <div>I'll exhibit my own truth. In the month of May, my watch logged an average of 4 hours of sleep a night; my other grades were slipping as I drained every drop of myself into my series, my 11 mirrors to myself. In Donald Murray's words, each painting was "sent off with a sense of accomplishment and shame and pride and frustration."</div>
        <br/>
        <div>Every art piece I have worked on is personal, is me. My art is my memories, dreams, & insecurities with heaps of abstraction; it allows me to showcase my mind in a way that is critically digestible and not so vulnerable. Every time I have been on display at a show or critque, my work is seen for the qualities & storyline that act as a blanket for my deeper meaning. Not to gloat in my "deepness" or whatever; I just never really had the bravery to give the honest meaning.</div>
        <br/>
        <div>From a technical perspective, art was constant insecurity; my peers were so incredibly talented, and I felt a constant pressure to compete, one that no one put there. After all, technical skill has never been my strong suit; my hands have such a tremble to them that a straight brushstroke is challenging, and Deutan color-blindness has made blending and layering painstaking. I remember feeling sick to my stomach at every critique. I remember losing my inspiration and direction in completing my series for weeks on end. I remember being willing to do anything to regrasp said direction, but to no avail.</div>
        <br/>
        <div>These are not details I bring up to try for your pity or your sympathy; they are just undeniable truths of the process that has brought the work I am most proud of. I am at ease, but my own honest testimony is that the innately painful and draining creative process is the only way I reached my fullest artistic potential.</div>
        <br/>
        <br/>
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <img src={`${process.env.PUBLIC_URL}/art/2art.webp`} alt="Art piece 11" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <br/>
        <br/>
        <div>The artist lays melted in their work; physically absent but ever present.</div>
        <br/>
        <div>I've always loathed the expression "separating the art from the artist". How? The art is the artist; the artist is the art.</div>
        <br/>
        <div>Maybe we do this to enjoy a problematic artist's work without acknowledging them; it's not just disingenuous or shallow to attempt this, but actively cruel, to say that you can separate a person's visceral & personal experience from a painting, or song, or book, without acknowledging and honoring the mind it is a child of. Berryman, Shields, and Wallace all have clear parallels between their creative releases and mental decline; perhaps Knausgård understood this, writing "For years I had tried to write about my father, but had got nowhere, probably because the subject was too close to my life". Much of the rightfully acclaimed work of Rembrandt, Michelangelo, and Picasso came in sync with their darkest secrets & most troubled moments.</div>
        <br/>
        <div>Much of the praise I've received for my work is for my use of blues & yellows, line-making, and symbolism; these characteristics only exist because of my initial inabilities, and the collective work only exists because of my internal struggle. Hopefully I've provided you with the revelation that Berryman gave me;</div>
        <br/>
        <div>But this understanding doesn't change anything.</div>
        <br/>
        <div>Knowing the truth doesn't set you free from it; Even if you think of this essay every time you read a book or look at a painting, you'll continue the cycle, and so will I.</div>
        <br/>
        <div>We still drain ourselves into creation. We still consume in bliss. Our lives lie paralyzed in our expressions, and the exhibition continues.</div>
        <br/>
        <div>The Beauty of the Creative Process.</div>
        <br/>
        <br/>
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <img src={`${process.env.PUBLIC_URL}/art/11art.webp`} alt="Art piece 12" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    )
    },
    { id: 3,
    title: "Take Me to the River",
    content: (
      <div>
        <br/>
        <br/>
        <div style={{ fontSize: '1.8rem', fontStyle: 'italic', marginBottom: '0.5rem' }}>
          <em>Take Me to the River</em> by Liam Kernan
        </div>
        <div style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
          an essay on faith.
        </div>
        <div>I stand at the edge of the river. Why have I been standing on the bank my entire life, unable to move?</div>
        <br/>
        <div>I've always struggled with the idea of God. It's not that I don't believe his existence to be true, or that I've had a forced relationship with him through parental and peer pressure; far from it. My Lutheran churchgoing was mildly enforced growing up, and the "holiness" of my public school didn't extend much farther than John 3:16 in an Instagram bio. I've always seen my struggle with faith as emblematic of how I haven't lived in a way that is fully in line with the savior I should be following with all my heart. I make efforts to be a "good" person in how I care for and help other people, but that's just a piece of what is expected in most derivatives of Christianity. I've always wanted to have unrelenting and dedicated faith; I just don't even know where to start, more specifically where to look outside of my "born" religion of Lutheran.</div>
        <br/>
        <div>I think the challenging thing about deciding what religion to follow is the singular differences in similar frameworks; how must I "pick one"? How am I supposed to know if I believe in reincarnation or a separate "heaven"? And the consequence for picking the "incorrect" one is eternal damnation? It doesn't make it easier how steadfast we are in faith; most of the human conflict, suffering, and death over the last 2000 years is fundamentally over religious disputes. Besides the obvious hypocrisy this presents from something that is supposed to unite people, it makes it even harder to have absolute faith in one savior when you have someone in your ear (who would literally die for this) telling you the opposite. Even within my own religion, how can I reconcile my own morality, the Bible, and the Church tell me to do? These questions don't have easy answers, and maybe that's the point of why writers and philosophers keep circling and considering them. But at the core, my question is simple: how can I develop true faith? What water is safe to enter?</div>
        <br/>
        <div>Lucky for me, The Alchemist claims to have the solution. Written by Paulo Coelho and distributed in 1988, it is undeniably a classic work and cornerstone of modern literature. As an author, Coelho's trajectory was tumultuous and ever relevant to the books' ideology. He grew up in the 1950s with the dream of writing as a professional author, much to the dismay of his engineer father, who committed him to a mental hospital three times. In adult life Coelho experimented between various religions and traditions, eventually having a spiritual experience on the Camino de Santiago pilgrimage and wrote The Alchemist in its wake. When it was time for The Alchemist to be distributed, the Brazilian publisher he signed with dropped the book after it only sold 900 copies. Coelho believed in his message and persisted, eventually found a new distributor, and went on to have one of the best-selling books in history. It's easy to see how Coelho believes the universe conspired to get him to this point, and that narrative is ever-present in The Alchemist.</div>
        <br/>
        <div>The general plot of The Alchemist follows Santiago, a boy who travels away from his planned life in Spain as a priest to become a shepherd and see the world. Santiago keeps having a recurring dream about a treasure at the pyramids, his "Personal Legend." After speaking to a dream interpreter and Melchizedek, he decides to make the journey. Santiago doesn't decide on a river to enter; he crosses deserts, led by the universe. Along the way he meets various characters representing different attitudes towards experiencing life: the Crystal Merchant, the Englishman, Fatima, and of course, The Alchemist. The Alchemist reveals to the boy through his "teachings" that the universe has conspired to lead him to this point and is communicating with him through various "signs." When Santiago finally makes it to the Pyramids, he is robbed by a group of thieves, one of whom mentions his "treasure" being buried under an oak tree in Spain; the same place Santiago's journey began. Santiago travels back to Spain and finds his "personal legend" lying where he began, symbolizing that the journey and experience were the "personal legend"; he was destined to find it.</div>
        <br/>
        <div>Coelho's message is seductive because it promises solid ground. His universe is one where God isn't found in church or scripture but in omens and dreams. It draws in with simplicity; instead of trying to navigate the issues I've been conflicted with about authority in church and submitting to the river, I can forgo it all and get comfortable with the universe leading me the right way through the desert. It's a much cleaner and less "judgmental" form of religion and swears to provide a sense of purpose. It's easy to see how Coelho came to this as the solution; his life was undoubtedly one of many challenges, but he ended up in success. In his eyes, the universe clearly conspired to get him to this point. But what if it doesn't? All The Alchemist does is swap "trust the church" for "trust the omens," "god has a plan" for "the universe conspires," and "cross the river" for "cross the desert". These solutions are just as unsatisfying and indigestible; just like how I don't know which religion to follow, how can I know what omens to follow? What if I'm just seeing what I want to see or missing something? For Coelho these solutions worked out wonderfully. But his survivorship bias isn't enough; how come countless who follow their "personal legends" end up homeless or destroyed in pursuit of them, unable to survive the desert? Isn't it cruel that the universe is conspiring to make this happen; How can I trust it?</div>
        <br/>
        <div>This goes beyond my pessimism; Ray Bradbury warns against this exact seduction in Fahrenheit 451. Released in 1953 (over 30 years prior to The Alchemist), it was written by an equally unorthodox writer. Bradbury never went to college or had formalized education in literature, writing Fahrenheit 451 on a rented typewriter in the UCLA library in only nine days. He worked intensely under his concern of the decline of reading due to the increase in mass media and television. The book follows Montag, a "firefighter" in a futuristic America where books have been banned and firefighters burn books (hence the title; the temperature books burn at). While Montag begins with total conviction in his book-burning, he meets various characters who take in life and literature, which leads him to reading and doubting everything he's been told. This comes to its climax when he meets a former professor named Faber who explains that books aren't magic; what matters is the texture and honesty of life they preserve.</div>
        <br/>
        <div>He describes books with the metaphor of skin. We have pores all across our bodies that sweat, absorb, breathe; good books are just like this, as they capture and soak in all of the non-uniform details of life instead of smoothing them over. But I think Faber's "pores" are about more than books; they're about water itself. Water doesn't flow through poreless surfaces. It needs texture, cracks, and imperfections to soak through and be absorbed. The book acknowledges that the river has rapids, that is, discomfort you can't ignore. He describes television and thus state-controlled media as poreless; devoid of nuance that make you uncomfortable or doubtful, and this "poreless" media is the ultimate demise of his world. But Faber isn't to be mistaken as a hero; he watched books get banned and did nothing to stop it, making his wisdom much more a confession than a proclamation. It confronts The Alchemist's seduction directly; it's built on comfort and a society that chose satisfaction and smoothness over the difficult, imperfect rapids of a river. He directly opposes Coelho's belief that the universe will lead you to peace without manual input; it's a wise and novel solution, but in reality, it provides assurance without clarity. So if Coelho's omens don't work, and Bradbury's uncertainty doesn't provide a clear answer, then what waters are safe to enter?</div>
        <br/>
        <div>My purpose in questioning the legitimacy of Coelho's messaging isn't to imply that his morals or faith are shallow or self-serving; far from it. His life as testimony is more than enough for him to put this worldview into the ether, but it doesn't form a truly holistic answer to the "problem." Countless have been challenged by the same thoughts as me and have tried to find peace with uncertainty in spirituality. But if structured "by the book" religion doesn't work, and unstructured "by our minds" religion doesn't work, then how can there be any certainty or security to be found here? Perhaps doubt itself is the only authentic response here; not doubt weaponized as satanism or "on the path to God," but honest and inconclusive doubt.</div>
        <br/>
        <div>Paul Tillich came to a similar conclusion. A renowned theologian who fled Nazi Germany and wrestled with faith for much of his professional life, he famously wrote in his book Dynamics of Faith that "Doubt is not the opposite of faith, it is one element of faith" (1957, p. 22). Tillich understands that certainty is not the point of religion, and any religion that offers signs from the universe or affirmation from the church is doing little more than following directions in blissful ignorance. I feel this is an appropriate time to return to Fahrenheit 451; after Montag understands Faber's message he flees the city, which is destroyed in a war no one knew was happening. He joins a group of travelers who had been memorizing books, preserving the wisdom in their heads until the world is ready to be rebuilt. The novel doesn't end with Montag having an objective answer; it leaves him open-minded and knowledgeable. The Alchemist's portrayal of why organized religion doesn't work is good, but it falls flat in its solution, perhaps because there is no solution. Maybe the path to true and unwavering faith is more similar to Montag's peace with uncertainty than Santiago finding treasure exactly where the universe promised him; Montag carries wisdom for a future he can't see, and maybe this is the best preparation for something as volatile as faith. Maybe this is all I (and everyone in a similar paradox) can do for now: learn more, gain new perspectives, and find what works for me.</div>
        <br/>
        <div>My generation has inherited the information age; the thoughts and ideologies of virtually every living person are a click away. It's many more perspectives than Coelho was exposed to, and infinitely many more than Bradbury was; with the development of artificial intelligence and even vaster reasoning and research, the next generation will be faced with even more options and uncertainty. Perhaps what gives me so much faith in Tillich's conclusion is the fact it is timeless; peace with uncertainty will always prove a solution, regardless of how vast and conflicting the field of evidence and perspective will come to be. I still don't know if the Jordan River is the right water for me, or if there even is a "right" water. But standing on the shore forever is death in itself; I haven't found certainty, maybe I never will, but I'm satisfied with this.</div>
        <br/>
        <div>Eyes wide open, I step into the river.</div>
      </div>
    )
    }
  ];

  const openEssay = (essayId) => {
    setSelectedEssay(essayId);
  };

  const closeEssay = () => {
    setSelectedEssay(null);
  };

  return (
    <div className="page-container">
      <BackButton />
      <h2 className="text-center google-sanscode text-8xl">essays</h2>
      
      <div className="essays-grid">
        {essays.map((essay) => (
          <button
            key={essay.id}
            className="essay-button"
            onClick={() => openEssay(essay.id)}
          >
            <div className="essay-paper">
              <div className="essay-lines">
                <div className="essay-line"></div>
                <div className="essay-line"></div>
                <div className="essay-line"></div>
                <div className="essay-line"></div>
                <div className="essay-line"></div>
              </div>
              <div className="essay-title">{essay.title}</div>
            </div>
          </button>
        ))}
      </div>

      {selectedEssay && (
        <div className="essay-overlay" onClick={closeEssay}>
          <div className="essay-reading-view" onClick={(e) => e.stopPropagation()}>
            <button className="essay-close-button" onClick={closeEssay}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#333">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            <div className="essay-content">
              {essays.find(essay => essay.id === selectedEssay)?.content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DocumentPage;

